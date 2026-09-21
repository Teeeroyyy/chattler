// Chattler admin: log in with Twitch (device flow, same app as Chattler), then list everyone who
// has logged into Chattler. The tracker only answers the owner's account, so this page is
// public but its data isn't.
(() => {
  const CLIENT_ID = '8snv3lokuspm4i9578ycp2431bj61c';
  const DEFAULT_API = 'https://chattler-stats.chattler.workers.dev';
  const params = new URLSearchParams(location.search);
  const API = (location.hostname === 'localhost' && params.get('api')) || DEFAULT_API;
  const KEY = 'chattler-admin-token';

  const $ = (s) => document.querySelector(s);
  const store = {
    get() { try { return sessionStorage.getItem(KEY); } catch { return null; } },
    set(v) { try { v ? sessionStorage.setItem(KEY, v) : sessionStorage.removeItem(KEY); } catch {} },
  };
  const show = (view) => document.querySelectorAll('[data-view]').forEach((el) => { el.hidden = el.dataset.view !== view; });
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  let users = [];
  let latestVersion = null;
  let sort = { key: 'last_seen', asc: false };
  let polling = null;

  /* ---------- Twitch login (device flow) ---------- */
  async function twitchPost(path, body) {
    const res = await fetch(`https://id.twitch.tv/oauth2/${path}`, { method: 'POST', body: new URLSearchParams(body) });
    return { ok: res.ok, data: await res.json().catch(() => ({})) };
  }

  async function startLogin() {
    const btn = $('[data-login]');
    const err = $('[data-login-error]');
    btn.disabled = true; err.hidden = true;
    try {
      const { ok, data } = await twitchPost('device', { client_id: CLIENT_ID, scopes: '' });
      if (!ok) throw new Error(data.message || 'Twitch didn’t start the login.');
      $('[data-code]').textContent = data.user_code;
      $('[data-activate]').href = data.verification_uri;
      window.open(data.verification_uri, '_blank', 'noopener');
      show('device');
      let interval = (data.interval || 5) * 1000;
      const deadline = Date.now() + (data.expires_in || 1800) * 1000;
      const poll = async () => {
        if (!polling) return;
        if (Date.now() > deadline) { stopPolling(); return fail('The login code expired. Try again.'); }
        const t = await twitchPost('token', { client_id: CLIENT_ID, scopes: '', device_code: data.device_code, grant_type: 'urn:ietf:params:oauth:grant-type:device_code' });
        if (t.ok && t.data.access_token) { stopPolling(); store.set(t.data.access_token); return load(); }
        const msg = t.data.message || '';
        if (/slow_down/i.test(msg)) interval += 5000;
        else if (!/authorization_pending/i.test(msg)) { stopPolling(); return fail(msg === 'access_denied' ? 'You cancelled the login on Twitch.' : 'Twitch login failed. Try again.'); }
        polling = setTimeout(poll, interval);
      };
      polling = setTimeout(poll, interval);
    } catch (e) {
      fail(e.message);
    } finally {
      btn.disabled = false;
    }
  }
  function stopPolling() { clearTimeout(polling); polling = null; }
  function fail(msg) { show('login'); const err = $('[data-login-error]'); err.textContent = msg; err.hidden = false; }

  /* ---------- Data ---------- */
  async function load() {
    const token = store.get();
    if (!token) { show('login'); return; }
    $('[data-refresh]').disabled = true;
    try {
      const [res, rel] = await Promise.all([
        fetch(`${API}/users`, { headers: { Authorization: `Bearer ${token}` } }),
        latestVersion ? null : fetch('https://api.github.com/repos/Teeeroyyy/chattler/releases/latest').then((r) => (r.ok ? r.json() : null)).catch(() => null),
      ]);
      if (rel?.tag_name) latestVersion = rel.tag_name.replace(/^v/, '');
      const body = await res.json().catch(() => ({}));
      if (res.status === 401) { store.set(null); show('login'); return; }
      if (!res.ok) return error(res.status === 403 ? 'Not the owner account' : 'Couldn’t load the list', body.error || `The tracker returned ${res.status}.`);
      users = body.users || [];
      whoAmI(token);
      render();
      show('users');
    } catch {
      error('Couldn’t reach the tracker', 'Check your connection and try again.');
    } finally {
      $('[data-refresh]').disabled = false;
    }
  }
  function error(title, text) {
    $('[data-error-title]').textContent = title;
    $('[data-error-text]').textContent = text;
    show('error');
  }
  async function whoAmI(token) {
    const res = await fetch('https://id.twitch.tv/oauth2/validate', { headers: { Authorization: `OAuth ${token}` } }).catch(() => null);
    const v = res?.ok ? await res.json() : null;
    if (v?.login) { const who = $('[data-who]'); who.innerHTML = `Logged in as <b>${esc(v.login)}</b>`; who.hidden = false; }
    $('[data-logout]').hidden = false;
  }

  /* ---------- Render ---------- */
  const DAY = 86400000;
  const fmtDate = (iso) => new Date(iso).toLocaleString(undefined, { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  function ago(iso) {
    const s = (Date.now() - new Date(iso)) / 1000;
    if (s < 60) return 'just now';
    if (s < 3600) return `${Math.floor(s / 60)}m ago`;
    if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
    return `${Math.floor(s / 86400)}d ago`;
  }
  const cmpVer = (a, b) => { const x = String(a || '0').split('.').map(Number), y = String(b || '0').split('.').map(Number); for (let i = 0; i < 3; i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0); return 0; };
  const pill = (u) => (u.status === 'owner' ? ['owner', 'Owner'] : u.restricted ? ['restricted', 'Restricted'] : ['ok', 'Active']);

  function filtered() {
    const q = $('[data-search]').value.trim().toLowerCase();
    const f = $('[data-filter]').value;
    return users.filter((u) => (!q || u.login.includes(q))
      && (f === 'all' || (f === 'active' ? Date.now() - new Date(u.last_seen) < 7 * DAY : !!u.restricted)));
  }

  function render() {
    const now = Date.now();
    const active = users.filter((u) => now - new Date(u.last_seen) < 7 * DAY).length;
    const today = users.filter((u) => now - new Date(u.last_seen) < DAY).length;
    const restrictedCount = users.filter((u) => u.restricted).length;
    $('[data-stats]').innerHTML = [
      [users.length, 'people have logged in'],
      [today, 'opened it in the last 24h'],
      [active, 'active in the last 7 days'],
      [restrictedCount, 'restricted'],
    ].map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join('');

    const list = filtered().sort((a, b) => {
      const k = sort.key;
      const d = k === 'sessions' || k === 'restricted' ? a[k] - b[k] : k === 'version' ? cmpVer(a[k], b[k]) : String(a[k] || '').localeCompare(String(b[k] || ''));
      return sort.asc ? d : -d;
    });
    $('[data-rows]').innerHTML = list.map((u) => `
      <tr>
        <td><a href="https://twitch.tv/${esc(u.login)}" target="_blank" rel="noopener">${esc(u.login)}</a></td>
        <td><span class="pill ${pill(u)[0]}"${u.restricted && u.restricted_at ? ` title="Restricted ${esc(fmtDate(u.restricted_at))}"` : ''}>${pill(u)[1]}</span></td>
        <td><time datetime="${esc(u.first_seen)}">${fmtDate(u.first_seen)}</time></td>
        <td><time datetime="${esc(u.last_seen)}">${fmtDate(u.last_seen)}</time><span class="ago">${ago(u.last_seen)}</span></td>
        <td><span class="ver${latestVersion && u.version && cmpVer(u.version, latestVersion) < 0 ? ' old' : ''}" title="${latestVersion && u.version && cmpVer(u.version, latestVersion) < 0 ? `Behind the latest (${esc(latestVersion)})` : ''}">${esc(u.version || '—')}</span></td>
        <td class="num">${u.sessions}</td>
        <td class="act">${u.status === 'owner' ? '' : `<button type="button" class="restrict${u.restricted ? ' on' : ''}" data-id="${esc(u.id)}" data-login="${esc(u.login)}">${u.restricted ? 'Unrestrict' : 'Restrict'}</button>`}</td>
      </tr>`).join('');
    const empty = $('[data-empty]');
    empty.hidden = list.length > 0;
    empty.textContent = users.length ? 'No one matches that search.' : 'Nobody has logged in yet. Names appear here the next time someone opens Chattler.';
    document.querySelectorAll('th[data-sort]').forEach((th) => {
      th.classList.toggle('sorted', th.dataset.sort === sort.key);
      th.classList.toggle('asc', th.dataset.sort === sort.key && sort.asc);
    });
  }

  function exportCsv() {
    const rows = [['twitch_name', 'status', 'first_login', 'last_opened', 'version', 'opens'],
      ...filtered().map((u) => [u.login, pill(u)[1].toLowerCase(), u.first_seen, u.last_seen, u.version || '', u.sessions])];
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = `chattler-users-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  /* ---------- Restrict ---------- */
  async function toggleRestrict(btn) {
    const u = users.find((x) => x.id === btn.dataset.id);
    if (!u) return;
    const on = !u.restricted;
    if (on && !confirm(`Restrict ${u.login}? They’ll be locked out of Chattler within about 10 minutes, and can’t get back in until you unrestrict them.`)) return;
    btn.disabled = true;
    btn.textContent = on ? 'Restricting…' : 'Unrestricting…';
    try {
      const res = await fetch(`${API}/restrict`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${store.get()}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: u.id, restricted: on }),
      });
      const body = await res.json().catch(() => ({}));
      if (res.status === 401) { store.set(null); show('login'); return; }
      if (!res.ok) throw new Error(body.error || `The tracker returned ${res.status}.`);
      Object.assign(u, body.user);
    } catch (e) {
      alert(`Couldn’t ${on ? 'restrict' : 'unrestrict'} ${u.login}: ${e.message}`);
    }
    render();
  }

  /* ---------- Wire up ---------- */
  $('[data-rows]').addEventListener('click', (e) => { const b = e.target.closest('button.restrict'); if (b) toggleRestrict(b); });
  $('[data-login]').onclick = startLogin;
  $('[data-cancel]').onclick = () => { stopPolling(); show('login'); };
  $('[data-refresh]').onclick = load;
  $('[data-retry]').onclick = load;
  $('[data-csv]').onclick = exportCsv;
  const logout = () => { store.set(null); $('[data-who]').hidden = true; $('[data-logout]').hidden = true; show('login'); };
  $('[data-logout]').onclick = logout;
  $('[data-switch]').onclick = logout;
  $('[data-search]').oninput = render;
  $('[data-filter]').onchange = render;
  document.querySelectorAll('th[data-sort]').forEach((th) => {
    th.onclick = () => {
      sort = sort.key === th.dataset.sort ? { key: sort.key, asc: !sort.asc } : { key: th.dataset.sort, asc: th.dataset.sort === 'login' };
      render();
    };
  });
  load();
})();
