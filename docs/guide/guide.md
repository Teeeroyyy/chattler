# Chattler User Guide

*For Chattler 1.7 · Windows 10 and 11*

Chattler is a fast, modern Twitch chat client for Windows. Watch and take part in many Twitch chats at once, see 7TV, BetterTTV and FrankerFaceZ emotes, and — if you're a moderator — keep busy chats clean with one-click tools, AutoMod in the chat, a live staff history and per-user monitoring.

---

## Contents

1. [At a glance](#at-a-glance)
2. [Install and log in](#install-and-log-in)
3. [A tour of the window](#a-tour-of-the-window)
4. [Tutorial: your first 10 minutes](#tutorial-your-first-10-minutes)
5. [Chatting](#chatting)
6. [Channel points](#channel-points)
7. [Emotes and badges](#emotes-and-badges)
8. [Highlights and alerts](#highlights-and-alerts)
9. [User cards](#user-cards)
10. [Moderation](#moderation)
11. [AutoMod](#automod)
12. [Window options](#window-options)
13. [Settings reference](#settings-reference)
14. [Keyboard shortcuts and mouse tricks](#keyboard-shortcuts-and-mouse-tricks)
15. [Updates](#updates)
16. [Privacy](#privacy)
17. [Troubleshooting and FAQ](#troubleshooting-and-faq)

---

## At a glance

| Area | What you get |
|---|---|
| **Layout** | Tabs, each holding one or more side-by-side chats ("splits"). Resize splits, drag them around, reorder tabs, and put tabs along the top or down the left. |
| **Chat** | Live chat with recent history, replies, first-time-chatter highlights, sub and raid notices, deleted-message handling, clickable links and search. Stays smooth in chats with thousands of people. |
| **Channel points** | Redemptions show up in chat. In your own channel you see the reward name and cost. |
| **Emotes** | Twitch emotes plus 7TV, BetterTTV and FrankerFaceZ (each can be switched off), including zero-width emotes that stack. Emote picker and Tab completion. |
| **Live info** | Each chat shows live status, viewers, uptime, game and title. Tabs show a green dot when someone in them is live. |
| **Highlights** | Your name plus your own list of words, with a ding, a coloured bar, taskbar flashing and desktop notifications — each one optional. |
| **User cards** | Click any name: profile, their recent messages, pin, move and resize the card, monitor them with a colour, and (for mods) moderation and staff history. |
| **Moderation** | One-click delete, timeout and ban on every line (with Undo), timeout lines that say which mod did it, chat pauses while you hover, chat modes, slash commands, **Staff history** and **Monitor user**. |
| **AutoMod** | Held messages appear right in the chat with **Allow** and **Deny**, the reason they were held, and the flagged words underlined. |
| **Window** | Background-only transparency, a pin that locks the window in place and keeps it on top, and three themes. |
| **Updates** | Installs updates by itself. |

---

## Install and log in

### Install

1. Go to **[chattler.net](https://chattler.net/#download)** and click **Download**.
2. Run **Chattler-Setup.exe**.
3. Windows may say **"Windows protected your PC"** because the installer isn't code-signed. Click **More info → Run anyway**.
4. Chattler installs for your Windows account only (no admin needed) and opens. From then on, find **Chattler** in your Start Menu.

### Log in

Chattler starts on a **Welcome to Chattler** screen.

1. Click **Log in with Twitch**.
2. Your browser opens Twitch with a code already filled in. Click **Authorize**. (If Twitch asks for the code, Chattler shows it.)
3. That's it — Chattler opens.

You only log in once; Chattler renews your login in the background. To switch accounts, use **Settings → Account → Log out**.

---

## A tour of the window

```
┌───────────────────────────────────────────────────────────────────────────┐
│ ≡  [Tab A] [Tab B • ] +          ● you   📌  ⚙          — ▢ ✕            │  ← title bar
├───────────────────────────────────┬───────────────────────────────────────┤
│ (◉) Channel  LIVE 1,514 watching  │ (◉) Other channel   Offline           │  ← split headers
│ Live for 2h · Game · Title…  🔨🛡🔍⊞✕│                          🔍 ⊞ ✕       │
│ Followers only · 10m              │                                       │  ← chat modes
│ 🗑 10m 🔨 20:53 name: message      │ 20:53 name: message                   │  ← chat
│ …                                 │ …                                     │
│ [ Send a message…            ☺ ] │ [ Send a message…              ☺ ]    │  ← message box
└───────────────────────────────────┴───────────────────────────────────────┘
```

**Title bar, left to right**

- **Logo**, **tabs** and **+** (new tab) — unless you've moved tabs to the left.
- **Restart to update** — appears when a new version has downloaded.
- **Connection dot** — green when connected (hover for details).
- **Your account** — your Twitch avatar and name.
- **📌 Pin** — lock the window in place and keep it on top.
- **⚙ Settings**.

**Tabs** show a **green dot** if someone in the tab is live, the tab name, a **purple dot** for unread messages (red if you were highlighted), and **×** to close.

**Each chat ("split")** has a header with the avatar (red ring when live), name, **LIVE** badge, viewers, uptime, game and title, plus these buttons:

| Button | What it does |
|---|---|
| 🔨 | Show or hide the moderation buttons in this chat *(mods only)* |
| 🛡 | Chat modes panel *(mods only)* |
| 🔍 | Search this chat (Ctrl+F) |
| ⊞ | Add another split next to this one (Ctrl+K) |
| ✕ | Close this split (Ctrl+W) |

Below the header, small grey chips show active **chat modes** (Emote only, Subscribers only, Unique chat, Slow mode, Followers only).

---

## Tutorial: your first 10 minutes

### Step 1 — Open a chat
On first launch Chattler asks for a channel. Type a Twitch name or paste a `twitch.tv/...` link and press **Enter**. Recent messages load straight away, then live chat continues below the **"Earlier messages above"** line.

### Step 2 — Put two chats side by side
Click **⊞** in the chat's header (or press **Ctrl+K**) and enter another channel. Drag the thin line between the chats to resize them; **double-click** it to make them equal again.

### Step 3 — Make a second tab
Press **Ctrl+T** (or click **+**) and enter a channel. Switch tabs by clicking them, with **Ctrl+Tab**, or with **Ctrl+1…9**.

### Step 4 — Organise your tabs
- **Rename** a tab: double-click it, type, press **Enter** (Esc cancels; clear it to go back to the automatic name).
- **Reorder**: drag a tab — a mint line shows where it'll land. Or press **Ctrl+Shift+PageUp / PageDown**.
- **Move a chat to another tab**: drag the chat's header onto the tab.
- **Close**: the tab's **×**, or middle-click it.
- **Prefer tabs down the side?** Settings → Appearance → **Tab position → Left**.

### Step 5 — Chat
Click the message box at the bottom of a chat, type, and press **Enter**. Try:
- Typing `:Kapp` then **Tab** to complete an emote.
- Typing `@` and part of a name, then **Tab**, to mention someone.
- Clicking **☺** for the emote picker.
- Hovering a message and clicking **↩** to reply to it.

### Step 6 — Get to know someone
Click any **username** to open their **user card**: their profile and what they've said this session. Click the **pin** to keep the card open, drag it by its header, and resize it from the bottom-right corner.

### Step 7 — Set up highlights
Settings → **Highlights**: add words you care about (for example `giveaway` or your nickname). Matching messages get a coloured bar, a ding and — if Chattler isn't the focused window — a taskbar flash and a desktop notification.

### Step 8 — Make it yours
Settings → **Appearance**: theme (Dark, Midnight or Light), text size, compact mode, timestamps, badges, background transparency and tab position. Everything applies instantly and is remembered.

---

## Chatting

### Sending messages
- **Enter** sends; the box grows for long messages. A counter appears near Twitch's 500-character limit.
- **/me text** sends an action message in your name colour.
- **Replies**: hover a message → **↩ Reply**. A "Replying to …" bar appears; **Esc** or **✕** cancels.
- **Sent-message history**: **↑ / ↓** in an empty box recalls what you sent.
- **Sending the same message twice**: Twitch normally blocks identical messages within 30 seconds; Chattler quietly makes the second one different so it goes through.

### Completion
- **Tab** completes the word you're typing: emotes (Twitch emotes you've seen, 7TV, BTTV, FFZ) and names of people in the chat. Use **↑ / ↓** to choose and **Tab / Enter** to accept.
- Start a word with **`:`** for emotes only, or **`@`** for people only.

### Reading chat
- **Recent history** (up to 150 messages) loads when you open a chat. Older lines are slightly dimmed.
- **Replies** show a small "Replying to @name: …" line above.
- **First-time chatters** get a green bar and a label.
- **Sub, resub, gift and raid notices** and **announcements** appear as highlighted cards.
- **Deleted messages and timed-out users** are greyed out and struck through (or hidden — see Settings).
- **Links** are clickable and open in your browser.
- **Hover actions** on any message: Reply, Mention, Copy.

### Busy chats
Chattler is built for huge, fast chats: messages are batched and only drawn when they're on screen, so scrolling stays smooth even with thousands of people chatting.

### Scrolling and search
- Scrolling up stops chat from jumping; a **"More messages below"** button takes you back down. Chattler only stops following the chat when *you* scroll up, so floods of messages don't knock it off the bottom.
- **Ctrl+F** opens a filter box for the focused chat — type text or a username to show only matching lines. **Esc** closes it.
- `/clear` (for non-mods) clears the chat on your screen only.

---

## Channel points

Channel point redemptions appear in the chat.

**In any channel**, messages sent with channel points get a small label:

| Label | Meaning |
|---|---|
| **Highlighted with channel points** | "Highlight my message" |
| **Sent in sub-only mode with channel points** | "Send a message in sub-only mode" |
| **Gigantified an emote** | "Gigantify an emote" |
| **Sent an animated message** | "Send an animated message" |
| **Redeemed a channel points reward** | A custom reward that came with a message |

**In your own channel** (when you're the broadcaster), Chattler also receives Twitch's full redemption feed, so you see **the reward's name and cost** — for example *"Redeemed Hydrate! · 500 points"* — including rewards that don't come with a chat message, and automatic rewards like **Unlock a Random Sub Emote** or **On-Screen Celebration**. (Twitch only shares reward names with the broadcaster.)

---

## Emotes and badges

- **Twitch emotes** always show.
- **7TV, BetterTTV and FrankerFaceZ** emotes load for each channel plus their global sets. **Zero-width emotes** stack on top of the emote before them, like on the web.
- **Hover any emote** to see it large, with its name and where it's from.
- **Emote picker (☺)**: all emotes for the chat grouped by provider, with search.
- **Turning providers off**: Settings → **Third-party emotes** → switch off 7TV, BetterTTV or FrankerFaceZ. Their emote names then show as plain text. Switching back on is instant.
- **Badges** (moderator, VIP, subscriber and so on) show before names; hover for their title. They can be hidden in Settings.

---

## Highlights and alerts

**Settings → Highlights**

- **Highlight words**: type a word and press **Add** (or Enter). Each word appears as a chip; click **×** to remove it. Matching ignores capitals.
- **Your username** is always highlighted when someone mentions you, and replies to you count too.

When a highlight arrives — each of these can be switched on or off:

| Option | What it does |
|---|---|
| **Ding sound** | A soft two-note chime (at most once per second). **Test** plays it. |
| **Highlighted in chat** | A coloured bar behind the message. |
| **Flash taskbar** | Chattler's taskbar button flashes until you switch to it (only when you're not already looking at Chattler). |
| **Desktop notification** | A Windows notification (only when Chattler isn't focused). |

---

## User cards

Click any **username** (or an `@mention`) to open their card.

**What's on it**
- Avatar, display name, when their account was created, follower count and bio.
- **Monitor user** — see [Monitor user](#monitor-user).
- **Messages** — what they've said in this chat this session, with deleted ones struck through.
- **Staff history** tab — *mods only*, see [Staff history](#staff-history).
- **Moderate** panel — *mods only*.
- **Mention**, **Open their chat**, **View on Twitch**.

**Moving and resizing**
- **Drag the card by its header** to put it anywhere in the window.
- **Resize it** from the bottom-right corner. Chattler remembers the size for the next card you open.
- Cards always stay on screen, even if you shrink the window.

**Pinning a card** (the pin in the card's top-right corner)
- The card stays open and doesn't close when you click elsewhere. Pin as many as you like.
- It keeps **adding that person's new messages live**, plus their timeouts and bans, and greys out deleted lines.
- Close it with its **×**. Clicking the same name again flashes the pinned card instead of opening a copy.

---

## Moderation

### Who gets the tools
Moderator tools appear **only in channels where you're a moderator or the broadcaster**. In any other channel you see no mod buttons at all. Messages from other moderators and the broadcaster never get mod buttons (Twitch doesn't allow actioning them).

### Quick buttons on every message
Each line starts with a small, fixed column of buttons, so they never move under your mouse:

| Default button | Action |
|---|---|
| 🗑 | Delete that message |
| **10m** | Time the person out for 10 minutes |
| 🔨 | Ban the person |

Choose which buttons appear in **Settings → Moderation → Quick buttons**: Delete, Purge (1s), 1m, 10m, 1h, 1d, 1w, Ban.

**Undo**: after a timeout or ban, a notification with **Undo** appears for a few seconds, and the "was timed out" line in chat also gets an **Undo** button.

**Hide the buttons in one chat**: click **🔨** in that chat's header. It only affects that chat and is remembered.

### Who timed them out
Timeout and ban lines say **which moderator did it, and why** — for example *"spambot3000 was timed out for 10m by **Ottertail**. Reason: link spam"*. This comes from Twitch's moderation feed (the same one that powers Staff history), so it works in channels you moderate.

### Pause while hovering
With **Pause chat while hovering** on (the default), chat stops moving while your mouse is over it, so the line you're aiming at stays put. A small pill shows **"Paused while hovering · N new"**; move the mouse away and everything catches up.

### Chat modes (🛡 in the chat header)
Toggle **Emote only**, **Subscribers only** and **Unique chat**; choose **Slow mode** (3s–2m) and **Followers only** (any follower up to 1 month). It always shows the channel's real current setting. **Clear chat for everyone** needs a second click to confirm.

### Slash commands

| Command | Effect |
|---|---|
| `/ban user [reason]` | Ban |
| `/unban user` · `/untimeout user` | Lift a ban or timeout |
| `/timeout user [duration] [reason]` | Timeout — durations like `30s`, `10m`, `1h30m`, `1d`, `2w` (default 10m, max 2 weeks) |
| `/purge user` | 1-second timeout to clear their messages |
| `/warn user reason` | Send a Twitch warning |
| `/clear` | Clear chat for everyone |
| `/slow [3–120]` · `/slowoff` | Slow mode |
| `/followers [duration]` · `/followersoff` | Followers-only (for example `10m`, `1d`) |
| `/emoteonly` · `/emoteonlyoff` | Emote-only |
| `/subscribers` · `/subscribersoff` | Subscribers-only |
| `/uniquechat` · `/uniquechatoff` | Unique chat |

Invalid values show the correct usage instead of guessing.

### The Moderate panel (user card)
Purge, 1m, 10m, 1h, 1d, 1w and 2w timeouts; **Ban**, **Unban** and **Warn**; and an optional **reason** box (required for warnings).

### Staff history
In channels you moderate, user cards have a **Staff history** tab that records **who did what, and when**:

- **Banned**, **Timed out · 10m**, **Unbanned**, **Timeout removed**, **Message deleted** (with the deleted text), **Warned** (with rules cited), **Made VIP / VIP removed**, **Made moderator / Moderator removed**.
- Each entry shows the **moderator**, the **reason**, and the full **date and time** — plus a note if it happened in a partner channel during Shared Chat.
- A summary at the top shows where they stand now (for example **"Timed out until 20:42 — by Nightbot"** or **"Banned"**) and totals (*2 timeouts · 1 deleted message · 1 warning*).
- It updates live while the card is open; a green dot shows it's recording.

Chattler listens to Twitch's moderation feed while it's running and saves every action on your PC, so history builds up over time. Twitch doesn't provide history from before you started using Chattler.

### Monitor user
Tick **Monitor user** on someone's card and pick a colour. All their messages in **that channel** get a tint and a coloured bar, so you can spot them instantly in a busy chat — including lines already on screen. Manage everyone you're monitoring in **Settings → Monitored users**.

---

## AutoMod

If you moderate a channel that uses AutoMod, **messages AutoMod holds for review appear right in the chat**, so you don't need Twitch's mod view open.

- Each held message shows **"AutoMod held this · reason"**:
  - an AutoMod filter category, like **Bullying**, **Swearing** or **Aggression**, with its level;
  - **Blocked term: word** or **Blocked link: address** when it matched the channel's blocked terms;
  - **for review** when Twitch doesn't give a reason.
- **The words that caused it are underlined** in red.
- Click **Allow** to let the message into chat, or **Deny** to reject it. The card then says **"Allowed by name"** or **"Denied by name"** — including when another moderator handles it — or **"Expired"** if nobody acted in time.

**Settings → Highlights → AutoMod (moderators)**
- **Highlight held messages** — held messages stand out until someone allows or denies them.
- **AutoMod chime** — a sound when AutoMod holds a message. It's different from the highlight ding, so you can tell them apart. **Test** plays it.

---

## Window options

### Background transparency
Settings → Appearance → **Background transparency** (30–100%). Only the **background** fades — text, names, emotes and badges stay solid, so you can put Chattler over a game or stream. Settings, popups and user cards stay solid so they're readable.
- Going below 100% switches the window to see-through mode; Chattler rebuilds the window in place when you let go of the slider (your tabs are kept).
- In see-through mode, resize the window from its edges and corners.

### Pin (📌 in the title bar)
Locks the window **in place** (it can't be moved, resized, maximised or snapped) and keeps it **on top of all other windows** — including games in borderless fullscreen. Click again to unpin. *(Exclusive-fullscreen games can still cover it; Windows doesn't allow any app on top of those.)*

### Tab position
Settings → Appearance → **Tab position: Top / Left**. **Left** puts tabs in a sidebar with full names and a **+ New tab** button; drag tabs up and down to reorder.

### Themes and text
**Dark**, **Midnight** (pure black, good for OLED screens) and **Light**; chat text size 11–20px; compact messages; timestamps; 24-hour clock; badges on or off.

---

## Settings reference

Open with **⚙** or **Ctrl+,**. Changes apply immediately.

| Section | Setting | Default |
|---|---|---|
| **Account** | Logged-in account, Log out | — |
| **Appearance** | Theme (Dark / Midnight / Light) | Dark |
| | Chat text size | 13.5px |
| | Compact messages | Off |
| | Show timestamps · 24-hour clock | On · On |
| | Show badges | On |
| | Background transparency | 100% |
| | Tab position (Top / Left) | Top |
| **Highlights** | Highlight words | none |
| | Ding sound (with Test) · Highlighted in chat · Flash taskbar · Desktop notification | all On |
| | AutoMod: Highlight held messages · AutoMod chime (with Test) | both On |
| **Monitored users** | Everyone you're monitoring, with colour and Stop monitoring | — |
| **Chat** | Show deleted messages (greyed and struck through, or hidden) | On |
| | Load recent messages on join | On |
| **Third-party emotes** | 7TV · BetterTTV · FrankerFaceZ | all On |
| **Moderation** | Pause chat while hovering | On |
| | Quick buttons on each message | Delete, 10m, Ban |
| **Keyboard** | Shortcut list | — |

---

## Keyboard shortcuts and mouse tricks

| Keys | Action |
|---|---|
| **Ctrl+T** | New tab |
| **Ctrl+K** | Add a split to this tab |
| **Ctrl+W** | Close the focused split |
| **Ctrl+F** | Search the focused chat |
| **Ctrl+,** | Settings |
| **Ctrl+Tab / Ctrl+Shift+Tab** | Next / previous tab |
| **Ctrl+1 … Ctrl+9** | Jump to a tab |
| **Ctrl+Shift+PageUp / PageDown** | Move the current tab back / forward |
| **Enter** | Send message |
| **Tab** | Complete emote or name |
| **↑ / ↓** | Recall sent messages (or move through completions) |
| **Esc** | Close popup, completion, search or reply |

| Mouse | Action |
|---|---|
| Click a username | Open their user card |
| Drag a user card's header / corner | Move / resize the card |
| Drag a tab | Reorder tabs |
| Double-click a tab | Rename it |
| Middle-click a tab | Close it |
| Drag a chat's header | Move the chat (onto another chat, or onto a tab) |
| Drag / double-click the line between chats | Resize / make equal |
| Hover an emote | See it large |
| Hover a message | Reply, Mention, Copy |

---

## Updates

Chattler checks for updates when it starts and every 30 minutes, downloads them in the background and shows a mint **Restart to update** button in the title bar. If you ignore it, the update installs the next time you quit. What changed in each version is listed on **[chattler.net](https://chattler.net/#releases)**.

---

## Privacy

**On your PC**

| What | Where |
|---|---|
| Layout, settings, highlight words, monitored users | `%APPDATA%\Chatter\config.json` |
| Your Twitch login | `%APPDATA%\Chatter\token.bin` — encrypted with Windows' own protection |
| Staff history | `%APPDATA%\Chatter\modlog.json` |

*(The folder is called "Chatter" after one of Chattler's earlier names, so settings carried over.)*

**What's shared**
- When you open Chattler, it tells Chattler's owner your **Twitch name**, the **version** you're using and **when you last opened it**. Nothing else — not your chats, messages or login — is shared. The owner can use this to restrict an account from using Chattler.
- Chattler talks to Twitch (chat, login, moderation), 7TV, BetterTTV, FrankerFaceZ and ivr.fi (emotes, badges, profiles, live status), recent-messages.robotty.de (chat history — can be turned off in Settings), and GitHub (updates). Links you click open in your normal browser.

---

## Troubleshooting and FAQ

**I don't see mod buttons.** You need to be a moderator (or the broadcaster) in *that* channel. Also check the chat's **🔨** toggle isn't switched off, and Settings → Moderation → Quick buttons.

**Staff history, "who timed them out" or AutoMod isn't working.** These need extra Twitch permissions that older logins don't have. Log out (Settings → Account) and use **Log in with Twitch** again, approving the permissions.

**I only see "Redeemed a channel points reward", not the reward name.** Twitch only shares reward names with the broadcaster, so full details appear in your own channel only.

**Chat stopped moving.** Your mouse is probably over it (pause while hovering) — look for the **"Paused while hovering"** pill, or move the mouse away. Scrolled up? Click **More messages below**.

**"Access restricted".** Chattler's owner has restricted that Twitch account. If you think it's a mistake, contact **Teeeroyyy**, then click **Check again**.

**"Can't check access".** Chattler couldn't reach Twitch. Check your internet connection; it retries automatically every 30 seconds.

**The window won't move or resize.** It's pinned — click **📌** in the title bar.

**Windows says "Windows protected your PC" when installing.** Expected, because the installer isn't code-signed: **More info → Run anyway**.

**How do I remove Chattler?** Windows Settings → Apps → **Chattler** → Uninstall.
