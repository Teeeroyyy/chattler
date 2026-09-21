// Fills in the download button and release notes from the public GitHub releases.
(() => {
  const REPO = 'Teeeroyyy/chattler';
  const FALLBACK = `https://github.com/${REPO}/releases/latest`;
  const SHOW = 6;

  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const inline = (s) => esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" rel="noopener">$1</a>');

  // Just enough Markdown for release notes: bullets and paragraphs. Headings and the
  // standard "download the installer" line are dropped - the card already says both.
  function notesHtml(body) {
    const lines = (body || '').split(/\r?\n/)
      .filter((l) => !/^#{1,6}\s/.test(l) && !/download the installer below|no longer available to download/i.test(l));
    let html = '', list = false;
    for (const raw of lines) {
      const l = raw.trim();
      const item = l.match(/^[-*]\s+(.*)/);
      if (item) { if (!list) { html += '<ul>'; list = true; } html += `<li>${inline(item[1])}</li>`; continue; }
      if (list) { html += '</ul>'; list = false; }
      if (l) html += `<p>${inline(l)}</p>`;
    }
    if (list) html += '</ul>';
    return html;
  }

  const fmtDate = (iso) => new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  const fmtSize = (b) => `${(b / 1048576).toFixed(0)} MB`;

  function renderReleases(releases, latestTag) {
    const box = document.querySelector('[data-releases]');
    const card = (r, i) => `
      <article class="release${r.tag_name === latestTag ? ' latest' : ''}">
        <div class="release-side">
          <span class="release-ver">${esc(r.tag_name.replace(/^v/, ''))}</span>
          <span class="release-date">${fmtDate(r.published_at)}</span>
          ${r.tag_name === latestTag ? '<span class="tag-latest">Latest</span>' : ''}
        </div>
        <div class="release-body">${notesHtml(r.body)}</div>
      </article>`;
    box.innerHTML = releases.slice(0, SHOW).map(card).join('');
    if (releases.length > SHOW) {
      const more = document.createElement('button');
      more.className = 'more';
      more.type = 'button';
      more.textContent = `Show ${releases.length - SHOW} older releases`;
      more.onclick = () => { box.innerHTML = releases.map(card).join(''); };
      box.append(more);
    }
  }

  function renderDownload(latest) {
    const exe = latest.assets.find((a) => /\.exe$/i.test(a.name));
    const version = latest.tag_name.replace(/^v/, '');
    document.querySelectorAll('[data-dl]').forEach((a) => {
      if (exe) a.href = exe.browser_download_url;
    });
    const label = document.querySelector('[data-dl-label]');
    if (label) label.textContent = `Download Chattler ${version}`;
    const pill = document.querySelector('[data-version]');
    if (pill) pill.textContent = `v${version} · ${fmtDate(latest.published_at)}`;
    const meta = document.querySelector('[data-meta]');
    if (meta && exe) meta.textContent = `Version ${version} · Windows 10 and 11 · 64-bit · ${fmtSize(exe.size)}`;
  }

  fetch(`https://api.github.com/repos/${REPO}/releases?per_page=100`, { headers: { Accept: 'application/vnd.github+json' } })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
    .then((all) => {
      const releases = all.filter((r) => !r.draft && !r.prerelease);
      if (!releases.length) throw new Error('none');
      renderDownload(releases[0]);
      // Releases published without notes are left out of the history (the download still uses the newest).
      renderReleases(releases.filter((r) => notesHtml(r.body)), releases[0].tag_name);
    })
    .catch(() => {
      document.querySelectorAll('[data-dl]').forEach((a) => { a.href = FALLBACK; });
      document.querySelector('[data-releases]').innerHTML =
        `<p class="muted">Couldn't load the release notes right now. <a href="https://github.com/${REPO}/releases">See them on GitHub</a>.</p>`;
    });
})();
