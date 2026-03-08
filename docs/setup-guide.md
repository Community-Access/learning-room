# Setup Guide
## Getting Ready to Contribute with a Screen Reader

This guide walks you through everything you need to set up before your first GitHub contribution. Complete all steps before the workshop begins.

---

## Step 1 - Create a GitHub Account

If you don't already have a GitHub account, create one at [github.com/join](https://github.com).

**Account name tips:**
- Choose something you're comfortable sharing publicly - your GitHub username will appear in commit history
- Avoid special characters other than hyphens
- Your username cannot be changed easily later

---

## Step 2 - Configure Accessibility Settings

GitHub has several accessibility settings that make navigation significantly easier with a screen reader. These settings are per-account and sync across devices.

1. Navigate to [github.com/settings/accessibility](htps://github.com/settings/accessibility)
2. Under "Motion", disable any animated effects if motion causes you difficulty
3. Under "Tab size", set to your preferred number of spaces
4. Confirm the page reads "Accessibility settings saved" before leaving

---

## Step 3 - GitHub Interface (No Action Needed)

GitHub's improved Issues and Pull Request experiences have been broadly rolled out and are likely already active for your account. However, some features may still appear as opt-in toggles in Feature Preview for some users.

You should automatically have:
- **Modern Issues experience** with proper heading hierarchy and better screen reader navigation
- **Improved Pull Request Files Changed view** with accessible diff navigation
- Better keyboard accessibility throughout GitHub

**To verify:** Activate the **User Menu** button (top right) → **"Feature preview"** → scan the list. Each toggle announces **"Pressed"** when enabled. If neither "New Issues Experience" nor "New Files Changed Experience" appears in the list, both have graduated to the standard interface and are active automatically.

If something doesn't match the workshop materials, verify your Feature Preview settings as above, then try clearing your browser cache and reloading the page.

---

## Step 4 - Disable Hovercards

GitHub's hovercards appear when your mouse hovers over a username or repository. For keyboard users, these can interfere with focus and create unexpected announcements.

1. Navigate to your account settings: [github.com/settings](https://github.com/settings)
2. Scroll to the "Hovercards" section
3. Uncheck "Show user hovercards"
4. Save the changes

---

## Step 5 - Configure Your Screen Reader for GitHub

### NVDA

1. Set the NVDA user interface language to match your system language (NVDA Menu → Preferences → Settings → General)
2. In Browse Mode settings: set "Maximum length of text" to 10000
3. Recommended browser: Google Chrome with the NVDA Google Chrome extension installed

### JAWS

1. Confirm JAWS is set to use the "Standard" verbosity level (JAWS Key + V → select Standard)
2. When on GitHub, use Virtual PC Cursor (reading mode) for general navigation
3. Switch to Forms Mode (Enter on a field) when filling out issue or comment forms

### VoiceOver (macOS)

1. Open VoiceOver Utility (Command+F5 to start VoiceOver → VO+F8 for utility)
2. Verbosity → Punctuation: set to "Some" or "All" for reading code blocks
3. Recommended browser: Safari (best VoiceOver compatibility) or Google Chrome

---

## Step 6 - Fork the Workshop Repository

To make your own contributions, you need your own copy of the repository.

1. Navigate to the workshop repository: [TODO: Add link to workshop repository here]
2. Find the "Fork" button in the top-right area of the page (navigate by button: B)
3. Choose your GitHub account as the destination
4. GitHub creates a fork: a copy of the repository that belongs to you

Your fork is at: `github.com/[your-username]/[repository-name]`

---

## Step 7 - Verify Your Setup

Before the workshop begins, confirm that you can:

- [ ] Navigate to github.com and read the page headings with your screen reader
- [ ] Find and read an issue in the Issues tab of the workshop repository
- [ ] Read a pull request description
- [ ] Access your account settings

If any of these steps are difficult, bring your question to the workshop. There will be dedicated setup time at the start of Day 1.

---

## Getting Help Before the Workshop

If you run into setup issues before the workshop:
- Open an issue in the workshop repository using the "Feature or Improvement Request" template
- Ask your question in the issue - be specific about what step you are on and what happens when you try it

---

*Note: Links marked [TODO] in this document need to be updated before the workshop. See the facilitator guide for details.*
