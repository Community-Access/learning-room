# Keyboard Shortcut Reference
## GitHub Navigation with Assistive Technology

This reference lists keyboard shortcuts for navigating GitHub with a screen reader. It covers three screen readers: NVDA, JAWS, and VoiceOver.

---

#### NVDA (Windows)

NVDA is a free, open source screen reader for Windows. Download it from [nvaccess.org](htps://nvaccess.org).

#### Single-Key Navigation (Browse Mode)

Use these keys to jump to specific element types on any GitHub page.

| Key | Moves to |
|-----|----------|
| H | Next heading |
| Shift+H | Previous heading |
| 1-6 | Next heading of that level |
| K | Next link |
| B | Next button |
| F | Next form field |
| T | Next table |
| D | Next landmark region |
| L | Next list |
| I | Next list item |

#### Switching Modes

| Key | Action |
|-----|--------|
| Insert+Space | Toggle between Browse Mode and Focus Mode |
| Insert+F7 | Elements list (links, headings, form fields, buttons) |

#### Reading Commands

| Key | Action |
|-----|--------|
| NVDA+↓ | Start reading from cursor (Say All) |
| NVDA+↑ | Read current line |
| Ctrl | Stop reading |

---

## JAWS (Windows)

JAWS (Job Access With Speech) is a professional screen reader for Windows made by Freedom Scientific.

### Single-Key Navigation (Virtual Cursor)

| Key | Moves to |
|-----|----------|
| H | Next heading |
| Shift+H | Previous heading |
| 1-6 | Next heading of that level |
| U | Next unvisited link |
| K | Next link |
| B | Next button |
| F | Next form field |
| T | Next table |
| R | Next landmark region |

### Switching Modes

| Key | Action |
|-----|--------|
| Enter | Activate Focus Mode on a form field |
| Insert+Z | Toggle Virtual PC Cursor |
| Num Pad Plus | Open PC Cursor (exit forms mode) |

### Reading Commands

| Key | Action |
|-----|--------|
| Insert+↓ | Start reading from cursor (Say All) |
| Insert+↑ | Read current line |
| Ctrl | Stop reading |

---

## VoiceOver (macOS)

VoiceOver is the built-in screen reader on macOS. Activate it with Command+F5.

The VoiceOver modifier key (VO key) is Control+Option.

### Rotor Navigation

The Rotor is VoiceOver's navigation hub. Open it with VO+U, then use ←/→ to switch between element types, and ↑/↓ to navigate within a type.

Element types available in the Rotor: Headings, Links, Form Controls, Tables, Landmarks, Web Spots.

### VO Commands for GitHub

| Command | Action |
|---------|--------|
| VO+U | Open Rotor |
| VO+Right/Left | Move forward/backward |
| VO+Up/Down | Adjust setting in Rotor |
| VO+Space | Activate current element |
| VO+Shift+Down | Interact with current element |
| VO+Shift+Up | Stop interacting |
| VO+A | Start reading from cursor |
| Ctrl | Stop reading |

---

## Screen-Reader-Neutral Shortcuts (All Screen Readers)

These shortcuts work in GitHub regardless of screen reader, because they are browser or operating system shortcuts.

### GitHub Page Shortcuts

| Key | Action |
|-----|--------|
| ? | Show keyboard shortcut help for the current page |
| G then I | Go to Issues tab |
| G then P | Go to Pull Requests tab |
| G then C | Go to Code tab |

### Form and Input

| Key | Action |
|-----|--------|
| Ctrl+Enter | Submit a comment or form |
| Tab | Move to next focusable element |
| Shift+Tab | Move to previous focusable element |
| Enter | Activate a focused button or link |
| Space | Check/uncheck a checkbox; activate a button |
| Arrow keys | Navigate within a radio group, tab bar, or menu |

---

## Common Issues and Workarounds

**NVDA reads the GitHub page too slowly:**
In NVDA Settings → Browse Mode → increase Maximum number of characters on one line to 10000.

**JAWS loses track of where I am on the Issues list:**
Press JAWS key + F5 to re-read the current page. If that does not help, refresh the page (F5) and navigate fresh.

**VoiceOver does not read new content when filter results refresh:**
GitHub issue list filtering updates via JavaScript. If VoiceOver does not announce the updated count, navigate to the heading of the list (H key) and read from there.

**The diff table in Files Changed is hard to read:**
The improved Files Changed experience has been broadly rolled out and is likely already active for your account. If you are experiencing issues with diff navigation or missing landmarks, verify using your screen reader: activate the **User Menu** button → **"Feature preview"** → look for **"New Files Changed Experience"**. If it appears, the toggle announces **"Pressed"** when enabled - activate it if not. If it no longer appears in the Feature Preview list, it has graduated to the standard interface and is active automatically.
