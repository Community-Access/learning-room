# Available Challenges

Welcome to the **Challenge Hub** - your guide to leveling up your GitHub and accessibility skills! 

This document is your **single source of truth** for all workshop challenges. It connects to GitHub issues that are pre-assigned to you by your @username.

**Quick Start:**
1. Go to the **Issues** tab of this repository
2. Look for issues titled `Chapter X.Y: [Challenge Name] (@YOUR_USERNAME)`
3. Click to open YOUR issue
4. Follow the steps in the issue description and this hub
5. Complete the challenge: **comment on the issue** (Chapters 4-5, 8-10, 12-14, 16) or **open a PR** (Chapters 6, 7, 11, 15)
6. Close the issue when done - you've leveled up and have earned a really awesome virtual trophy. Sadly, it's only virtual, but it's still something you should be incredibly proud of.


### Facilitators and Admins

Are you managing this workshop? See [FACILITATOR_CHALLENGES.md](../../FACILITATOR_CHALLENGES.md) for:
- How to generate challenges for a new cohort
- Monitoring student progress in real time
- Understanding bot validation and automation
- Archiving and refreshing issues between cohorts
- Pre-workshop setup checklist


## How to Find Your Challenges

### Method 1: GitHub Issues Tab (Easiest)
1. Click the **Issues** tab at the top of this repository
2. Your challenges are assigned to you - filter by assignee (click your avatar)
3. Each issue title shows the chapter and challenge number
4. Click any issue to start

**Example:** You'll see issues like:
```
Chapter 4.1: Create Your First Issue (@yourname)
Chapter 4.2: Comment and @Mention (@yourname)
Chapter 4.3: Add a Sub-Issue (@yourname)
Chapter 6.1: Create One Small Branch Change (@yourname)
```

### Method 2: Use Advanced Search
In the GitHub search bar at the top:
```
is:issue assignee:@yourname label:challenge
```

This shows all challenges assigned to you.

### Method 3: This Challenge Hub (Below)
Expand any chapter section below to see the full instructions. The hub is the **detailed reference** - issues are the **lightweight tracker**.


## Challenge Lifecycle

There are two kinds of challenges. The type determines how you complete it.

### Comment-Based Challenges (Chapters 4, 7-10, 12-14, 16)

No branches, no PRs, no file editing. Your work happens entirely in issue threads.

```
1. FIND      → Open your assigned issue in the Issues tab
2. WORK      → Follow the steps in the issue + this hub
3. COMMENT   → Post your evidence as an issue comment
4. CLOSE     → Close the issue when done
```

### PR-Based Challenges (Chapters 6, 7, 11, 15)

You edit a file, create a branch, and open a pull request that references the issue.

```
1. FIND      → Open your assigned issue in the Issues tab
2. BRANCH    → Create a branch (naming convention below)
3. EDIT      → Make the change described in the issue
4. PR        → Open a PR with "Closes #XX" in the body
5. VALIDATE  → Bot checks your work (Chapters 6, 7, 11)
6. FIX       → If bot finds issues, fix and push again
7. MERGE     → When checks pass, merge your PR
8. COMPLETE  → Issue auto-closes!
```

### Branch Naming Convention

| Chapter | Branch name pattern | Example |
|---------|--------------------|---------|
| Chapter 4 | No branch needed | Work happens in issue threads |
| Chapter 5 | No branch needed | Work happens in issue threads |
| Chapters 6-7 | `fix/yourname-issueXX` | `fix/maria-issue42` |
| Chapters 8-10 | No branch needed | Work happens in issue threads |
| Chapter 11 | `chapter11/yourname-issueXX` | `chapter11/maria-issue55` |
| Chapters 12-14 | No branch needed | Work happens in issue threads |
| Chapter 15 | `templates/yourname-issueXX` | `templates/maria-issue60` |
| Chapter 16 | No branch needed (optional: `agents/yourname-issueXX`) | `agents/maria-issue65` |

> **What about your `username-practice` branch?** That branch was created for you in Chapter 3. It becomes useful starting in Chapter 11 when you work locally with Git and VS Code. For Chapters 6-7, use short-lived `fix/` branches instead.


##  Chapter Challenge Map (Chapters 2-16)

Use this map for a consistent student experience: safe start, small actions, visible progress.

### Shared Learning Pattern

1. **Learn:** short chapter walkthrough.
2. **Practice:** one small, clear action.
3. **Prove:** leave evidence in issue or PR.
4. **Celebrate:** close issue and reflect briefly.

### Chapter-by-Chapter Status

| Chapter | Challenge Model | Count | Evidence | Automation |
| --- | --- | --- | --- | --- |
| Chapter 2: Navigating Repositories | Orientation only | 0 | Readiness check with facilitator | None |
| Chapter 3: The Learning Room | System orientation only | 0 | Can explain issue -> branch -> PR flow | None |
| Chapter 4: Working with Issues | Micro issue challenges (no branch needed) | 3 | Issue creation + @mention comment + sub-issue | Manual/facilitator |
| Chapter 5: VS Code Accessibility | Guided setup baseline | 1 | Completion comment checklist | None |
| Chapter 6: Working with Pull Requests | Bot-validated PR challenges (first branch + file edit) | 3 | Linked PR (`Closes #XX`) + passing checks | PR bot validation |
| Chapter 7: Merge Conflicts | Controlled single drill | 1 | Issue-linked PR resolving conflict markers | Manual by default |
| Chapter 8: Culture and Etiquette | Guided reflection | 1 optional | Structured reflection comment | None |
| Chapter 9: Labels/Milestones/Projects | Guided triage recommendation | 1 | Triage recommendation comment (or apply labels if permitted) | None by default |
| Chapter 10: Notifications | Guided setup walkthrough | 1 | Completion comment checklist | None |
| Chapter 11: Git & Source Control | Bot-validated local Git challenges | 3 | Commits + branch + PR with `Closes #XX` | PR bot validation |
| Chapter 12: GitHub PR Extension | Guided PR extension setup | 2 | Issue comment with checklist | None |
| Chapter 13: GitHub Copilot | Guided AI-assisted writing | 3 | Issue comment with action checklist | None |
| Chapter 14: Accessible Code Review | Guided PR review practice | 2 | Issue comment with review summary | None |
| Chapter 15: Issue Templates | Analyze registration template, remix & create | 2-3 | Issue/PR comment with template remixed or created | None |
| Chapter 16: Accessibility Agents | Guided agent exploration + capstone feedback | 3-5 + Capstone | Issue comment with agent evaluation + feedback form | None |

### Confidence Rules

- Keep challenge tasks under 10 minutes.
- Limit scope to one action and one proof artifact.
- Prefer issue comments when automation is not reliable.
- Use PR checks only where technical validation is deterministic.
- In chapter challenge sections, always include: actionable steps, expected outcomes, "If You Get Stuck," and a short learning moment.


## Full Challenge Details (Expandable Reference)

Students can expand any chapter below to see the complete challenge instructions without leaving this hub. Full chapter documentation is also available in each chapter file.

<details>
<summary><strong>Chapter 4: Working with Issues</strong> - 3 Micro-Challenges</summary>

> **Branch guidance:** Chapter 4 focuses on issue skills. You do NOT need to create a branch or edit any files for these challenges. All your work happens in GitHub issue threads. File editing and branches start in Chapter 6.

### Challenge Set

1. **Create your first issue** - file a new issue with a clear title and description.
2. **Comment and @mention** - leave a comment on a classmate's issue and tag them with an @mention.
3. **Add a sub-issue** - break a larger issue into smaller, trackable pieces.

### Challenge 4.1: Create Your First Issue

**Goal:** File a new issue in the Learning Room repository.

1. Open the `learning-room` repository in your browser.
2. Navigate to the **Issues** tab (keyboard shortcut: press `G` then `I`).
3. Activate the **New issue** button.
4. If a template picker appears, select **Open a blank issue**.
5. Type a clear, specific title (at least 12 characters). Examples:
   - "Add missing contributor background paragraph in welcome.md"
   - "Keyboard shortcuts table has incorrect NVDA modifier key"
   - "Setup guide link to accessibility settings is broken"
6. Write a meaningful description (at least 80 characters). Include what the problem is, where it exists (file name and section), and what a fix might look like.
7. Activate **Submit new issue**.
8. Note the issue number (for example, `#150`). You will reference this later.

**You are done when:** Your new issue appears in the Issues list with your username as the author.

### Challenge 4.2: Comment and @Mention

**Goal:** Leave a comment on another student's issue and use an @mention to notify them.

1. Open the **Issues** tab in the `learning-room` repository.
2. Find an issue created by a classmate (look for issues from Challenge 4.1, or browse open issues).
3. Open the issue by activating its title link.
4. Read the issue description to understand what they reported.
5. Scroll to the comment box at the bottom.
6. Write a helpful comment that **@mentions the issue author by username**. Examples:
   - "@classmate I can confirm this - the link in setup-guide.md goes to a 404 page."
   - "@classmate Good catch! I think the correct shortcut is Insert+F7, not Insert+F5."
   - "@classmate I'd suggest adding the paragraph right after the 'Who Can Contribute' heading."
7. Activate the **Comment** button (or press `Ctrl+Enter`).

**Why @mentions matter:** When you type `@username`, GitHub sends that person a notification. This is how real open source teams communicate - you signal who needs to see your message. It also bridges into Chapter 10 (Notifications) where you will configure how you receive these alerts.

**You are done when:** Your comment appears in the thread and includes an @mention (the username will render as a clickable link).

### Challenge 4.3: Add a Sub-Issue

**Goal:** Break a larger issue into smaller, trackable pieces using GitHub's sub-issue feature.

> **What are sub-issues?** Sub-issues let you decompose a big task into smaller steps, each tracked independently. The parent issue shows a progress bar as sub-issues are completed. This is how teams organize real work - a single "Fix accessibility in welcome.md" issue might have sub-issues for each specific fix.

1. Open the issue you created in Challenge 4.1 (or any open issue you have permission to edit).
2. Look for the **Sub-issues** section in the issue sidebar (right side on desktop). If you do not see it, look for an **Add sub-issue** button or the **Create sub-issue** option below the issue description.
3. Activate **Add sub-issue** and choose **Create new sub-issue**.
4. Give the sub-issue a clear title that describes one specific piece of the parent issue. For example, if the parent is "Fix accessibility in welcome.md":
   - Sub-issue: "Add alt text to welcome banner image"
   - Sub-issue: "Fix heading hierarchy in Getting Started section"
5. Add a short description and activate **Create**.
6. The sub-issue now appears nested under the parent issue with a progress indicator.

**You are done when:** Your parent issue shows at least one sub-issue in the Sub-issues section.

### Completing Chapter 4

Post a comment on your **assigned Chapter 4.1 challenge issue** with your evidence:

```text
Chapter 4 completed:
- Challenge 4.1: Created issue #[number]
- Challenge 4.2: Commented with @mention on issue #[number]
- Challenge 4.3: Added sub-issue to issue #[number]
```

Replace `[number]` with actual issue numbers. Then close your Chapter 4 challenge issues.

### Expected Outcomes

- Student can create an issue with a clear title and description.
- Student can communicate in issue threads using @mentions.
- Student can organize work by breaking issues into sub-issues.

### If You Get Stuck

1. Can't find a classmate's issue? Filter the Issues tab by `is:open` and look for recent ones.
2. @mention not working? Make sure you type `@` immediately followed by the username with no space.
3. Sub-issue option not visible? Ask a facilitator - the feature may need to be enabled for the repository.
4. Still stuck? Ask a facilitator for a direct issue link.

### Learning Moment

Issues are collaborative spaces, not just task lists. An @mention tells someone "I need your attention here." Sub-issues turn vague tasks into clear checklists. Both skills are used daily in real open source projects.

</details>


<details>
<summary><strong>Chapter 5: VS Code Accessibility</strong> - Guided VS Code Accessibility Baseline (No Bot Check)</summary>

### Goal

Confirm students can access VS Code (github.dev or desktop), enable screen reader support, and perform core file navigation.

### Student Steps

1. Open any repository and launch github.dev with `.` (period key).
2. Screen reader mode setup:
   - Windows (NVDA/JAWS): enable with `Shift+Alt+F1`.
   - Mac (VoiceOver): mode is usually already optimized. If needed, run Command Palette and search `Toggle Screen Reader Accessibility Mode`.
3. Open Explorer with `Ctrl+Shift+E` (Mac: `Cmd+Shift+E`).
4. Open `README.md` from the file tree.
5. Open outline/symbols with `Ctrl+Shift+O` (Mac: `Cmd+Shift+O`).
6. Open Command Palette with `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) and run any command.
7. Return to your assigned challenge issue and post a completion comment using this format:

```text
Chapter 5 complete:
- Opened github.dev: yes
- Screen reader mode enabled: yes
- Opened file in Explorer: yes
- Opened outline/symbols: yes
- Opened Command Palette: yes
```

### Expected Outcomes

- Student can launch and navigate github.dev or desktop VS Code.
- Student can enable screen reader mode and open core navigation surfaces.
- Student is ready for VS Code-based contribution chapters.

### If You Get Stuck

1. Confirm you are in a repository page before pressing `.`.
2. Retry screen reader mode toggle once, then verify in settings.
3. On Mac with VoiceOver, use Command Palette (`Cmd+Shift+P`) and run `Toggle Screen Reader Accessibility Mode` if keyboard navigation feels inconsistent.
4. Use Command Palette to run commands when shortcut memory is hard.
5. Ask facilitator for a side-by-side demo and repeat the same 5 steps.

### Learning Moment

Tool setup is part of contribution skill. A stable, accessible editor reduces stress and increases contribution quality.

</details>

<details>
<summary><strong>Chapter 6: Working with Pull Requests</strong> - 3 PR-Validated Challenges</summary>

> **Branch guidance:** This is the first chapter where you edit files and create branches.
>
> - **Web editor (recommended):** When you edit a file on GitHub.com and click "Propose changes," GitHub creates a branch for you. Name it `fix/yourname-issueXX`.
> - **Local Git:** Create a branch with `git checkout -b fix/yourname-issueXX` from `main`.
> - **Do NOT use your `username-practice` branch yet.** That is for Chapter 11 and beyond.

### Challenge Set

1. **Create one small branch change** - edit a practice file on a new branch.
2. **Open a linked PR** - use the PR template and include `Closes #XX`.
3. **Pass required checks** - respond to bot feedback until all required checks pass.

### Challenge 6.1: Create One Small Branch Change

**Goal:** Edit one of the practice files and save your change on a new branch.

Open your **assigned Chapter 6.1 challenge issue** (the one titled "Chapter 6.1: Create One Small Branch Change (@yourname)"). The issue description tells you which file to edit and what to fix.

The Learning Room has three practice files with intentional problems. Your assigned issue points you to one of them:

| File | What to fix |
|------|-------------|
| `docs/welcome.md` | Three `[TODO]` sections where content is missing |
| `docs/keyboard-shortcuts.md` | Intentional errors in shortcut references |
| `docs/setup-guide.md` | Broken links and incomplete steps |

**Using the web editor:**

1. Navigate to the file in the `learning-room` repository.
2. Activate the **pencil icon** (Edit this file).
3. Make your change (keep it small and focused).
4. Activate **Commit changes**.
5. In the branch name field, type: `fix/yourname-issueXX`.
6. Select **Create a new branch for this commit and start a pull request**.
7. Activate **Propose changes**.

### Challenge 6.2: Open a Linked PR

1. On the "Open a pull request" page, write a descriptive title.
2. In the body, include a summary of your change (at least 50 characters) and the line `Closes #XX` (where XX is your Chapter 6 challenge issue number).
3. Verify the base branch is `main` and the compare branch is your `fix/` branch.
4. Activate **Create pull request**.

### Challenge 6.3: Pass Required Checks

1. Wait about 30 seconds. The bot posts a validation comment.
2. Read the bot feedback. It checks: issue reference, description length, file location, and accessibility.
3. If the bot reports failures, edit the file again (directly on your branch via the Files changed tab pencil icon), fix the issue, and commit. The bot re-runs automatically.
4. Repeat until all checks show green checkmarks.
5. Request a review from a peer or facilitator.

### Expected Outcomes

- Student opens a focused PR that maps to one issue.
- Student uses `Closes #XX` correctly.
- Student can interpret bot feedback and improve the PR.

### If You Get Stuck

1. Confirm your PR includes `Closes #XX` in title or body.
2. Check that changed files are only in `learning-room/`.
3. Open the bot validation comment and resolve one required check at a time.
4. If checks still fail, ask for peer or facilitator review with the exact error message.

### Learning Moment

A great PR is small, linked to an issue, and easy to review. Faster feedback builds confidence and momentum.

</details>

<details>
<summary><strong>Chapter 7: Merge Conflicts</strong> - 1 Controlled Conflict Drill</summary>

### Challenge: Resolve Conflict Markers

**Sample file:** [`learning-room/docs/samples/chapter-6-conflict-practice-sample.md`](./samples/chapter-6-conflict-practice-sample.md)

1. Open the assigned merge-conflict practice issue.
2. Edit only the designated practice file/section.
3. Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) and keep the intended final content.
4. Open PR with `Closes #XX` and complete with a short issue comment summary.

### Expected Outcomes

- Student can identify conflict markers immediately.
- Student can remove markers and keep intended content.
- Student can submit a clean, issue-linked PR after resolution.

### If You Get Stuck

1. Pause and read marker blocks line by line before editing.
2. Keep one side, or combine both sides when both lines are valid.
3. Delete all marker lines (`<<<<<<<`, `=======`, `>>>>>>>`).
4. Ask facilitator to sanity-check final content before opening PR.

### Learning Moment

Merge conflicts are not failures. They are a normal collaboration checkpoint and a chance to make an intentional content decision.

</details>

<details>
<summary><strong>Chapter 8: Culture and Etiquette</strong> - Optional Guided Reflection</summary>

### Optional Guided Reflection (Issue Comment Evidence)

Students can post one short comment on their assigned issue:

```text
Chapter 8 reflection:
- One respectful review habit I will use:
- One way I will ask for help clearly:
- One way I will respond to feedback constructively:
```

This keeps learning visible without creating a pass/fail pressure point.

**Completion criteria:** Post one sentence for each of the three prompts.

### Expected Outcomes

- Student can name respectful collaboration behaviors.
- Student can prepare a constructive feedback style before review work.
- Student feels safer asking for help in public threads.

### If You Get Stuck

1. Use one simple sentence per prompt.
2. Focus on one real behavior you can do today.
3. If writing feels hard, draft bullet points first, then post.
4. Ask facilitator for one example response and adapt it.

### Learning Moment

Technical quality and communication quality work together. Respectful, clear communication helps good code get merged faster.

</details>

<details>
<summary><strong>Chapter 9: Labels, Milestones, and Projects</strong> - 1 Guided Triage Recommendation</summary>

### Challenge: Triage Recommendation Comment

**Estimated time:** 5-10 minutes

1. Open your assigned challenge issue.
2. Review issue title, description, and target file.
3. Post a triage recommendation comment using this format:

```text
Chapter 9 triage recommendation:
- Suggested labels:
- Suggested milestone:
- Suggested project board column:
- One-sentence reason:
```

4. If you have write access, apply the recommended labels/milestone directly.

This keeps the task simple and accessible for all students, including those without triage permissions.

### Expected Outcomes

- Student can recommend labels/milestone/project placement using issue context.
- Student understands triage even without maintainer permissions.
- Student leaves a clear, reusable triage note for maintainers.

### If You Get Stuck

1. Start with one label only (`documentation`, `bug`, or `accessibility`).
2. If milestone is unclear, write `none` and explain why.
3. If project board is unknown, write `needs triage` and continue.
4. Ask facilitator to review your one-sentence reason before posting.

### Learning Moment

Triage is about clarity, not authority. Good recommendations reduce maintainer effort and speed up collaboration.

</details>

<details>
<summary><strong>Chapter 10: Notifications</strong> - Guided Setup Walkthrough (No Bot Check)</summary>

### Goal

Set up a useful notification workflow so students can keep up with reviews, mentions, and assignments without inbox overload.

**Estimated time:** 8-12 minutes

### Student Steps

1. Open the workshop repository and set **Watch** to **Participating and @mentions**.
2. Open the notifications inbox: `https://github.com/notifications`.
3. Activate the **Review requested** filter.
4. Activate the **Assigned** filter.
5. Open one notification and return to inbox.
6. Perform one inbox action on a non-critical thread:
   - `M` to mute, or
   - `E` to mark done.

### Expected Outcome

- Student can find review requests quickly.
- Student can find assigned work quickly.
- Student can reduce noise with one inbox action.

### If You Get Stuck

1. Reload the notifications page and reapply one filter at a time.
2. If inbox is empty, switch to `Done` and practice action flow there.
3. If shortcuts conflict with screen reader mode, focus the notification row and retry.
4. Ask facilitator to model one inbox action live, then repeat.

### Learning Moment

Notification management protects focus. You can stay responsive without drowning in updates.

</details>


<details>
<summary><strong>Chapter 11: Git & Source Control in VS Code</strong> - 3 Bot-Validated Local Git Challenges</summary>

### Challenge Set

**Estimated time:** 20-30 minutes

**Prerequisite checkpoint:** Complete Chapter 5 first so VS Code navigation and accessibility settings are already stable.

1. **Clone the sci-fi themes repository**
   - Clone `https://github.com/community-access/vscode-sci-fi-themes.git` to your local machine using VS Code.
   - Explore the themes and pick one (Star Trek, Hitchhiker's Guide, or Star Wars).

2. **Make one small commit**
   - Edit a file in the cloned repo (or in the learning-room), stage changes, write a clear commit message, and commit locally.

3. **Push and open a linked PR**
   - Push your branch and open a PR that references a challenge issue with `Closes #XX`.

### Expected Outcomes

- Student can clone a repository using VS Code Command Palette.
- Student can navigate the Source Control panel and stage files.
- Student can write a clear commit message and push a branch to GitHub.

### If You Get Stuck

1. Confirm Command Palette opens with `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac).
2. If Source Control panel doesn't open, use `Ctrl+Shift+G` (Windows) or `Cmd+Shift+G` (Mac).
3. If push fails, verify authentication: `Ctrl+Shift+P` → "Git: Fetch" to test connection.
4. If branch won't create, confirm VS Code is in the cloned repository folder (status bar shows branch name).
5. Ask facilitator to verify your clone location and help with one push.

### Fun Fact

Once you've cloned the sci-fi themes repo and applied a theme, open Copilot Chat (`Ctrl+Shift+I`) and ask it a question. While it thinks, watch your custom sci-fi loading phrases appear.

### Learning Moment

Local Git operations give you full control and immediate feedback. You can see your changes before they reach GitHub.

</details>

<details>
<summary><strong>Chapter 12: GitHub Pull Requests Extension</strong> - 2 Guided PR Review Challenges</summary>

### Challenge Set

**Estimated time:** 15-25 minutes

1. **Install the GitHub Pull Requests extension**
   - Add the extension to VS Code and sign in with your GitHub account.

2. **Check out a challenge PR and post a review**
   - Download a PR branch locally and write one constructive review comment.
   - If checkout is blocked by permissions, complete the challenge by reviewing the PR in read-only mode and posting one specific comment.

### Expected Outcomes

- Student can install and authenticate the GitHub PR extension.
- Student can check out a PR branch in VS Code.
- Student can interactively review changes and post feedback.

### If You Get Stuck

1. If extension doesn't install, reload VS Code with `Ctrl+Shift+P` → "Developer: Reload Window".
2. If OAuth sign-in fails, verify your GitHub account is active in the browser first, then retry.
3. If PR list is empty, switch to "All Open" view in the GitHub section of Explorer.
4. If checkout fails, confirm you have write access to the repository or ask facilitator.
5. Ask facilitator to verify the GitHub PR view in Explorer and help with one checkout.
6. If Activity Bar focus is hard with a screen reader, use Command Palette and run `GitHub Pull Requests: Focus on Pull Requests View`.

### Learning Moment

PR tooling multiplies your impact. Reviewing others' work refines your own standards and builds community trust.

</details>

<details>
<summary><strong>Chapter 13: GitHub Copilot</strong> - 3 Guided AI-Assisted Writing Challenges</summary>

**Access note:** GitHub Copilot Free tier works for this workshop. Paid plan is not required.

### Challenge Set

1. **Install GitHub Copilot and sign in**
   - Install the GitHub Copilot Chat extension from Extensions sidebar and authenticate.

2. **Clone the sci-fi themes repo and ask Copilot to explain it**
   - Clone `https://github.com/community-access/vscode-sci-fi-themes.git`
   - Open Copilot Chat (`Ctrl+Shift+I` / Mac: `Cmd+Shift+I`)
   - Ask: "What does the `chat.agent.thinking.phrases` setting do in VS Code?"
   - Read Copilot's explanation and apply one theme to your settings.json
   - Reload VS Code and see custom sci-fi phrases in Copilot Chat!

3. **Create a custom theme with Copilot**
   - In Copilot Chat, ask: "Create custom GitHub Copilot thinking phrases for [your favorite universe - Dune, Marvel, Studio Ghibli, etc.]"
   - Copilot generates a theme
   - Copy it into your settings.json and reload VS Code
   - Enjoy your personalized Copilot experience!

### Expected Outcomes

- Student can install and authenticate GitHub Copilot Chat.
- Student can ask Copilot effective questions about code and settings.
- Student can use Copilot's output to customize their development environment in fun and creative ways.

### If You Get Stuck

1. If extension installation fails, reload VS Code with `Ctrl+Shift+P` → "Developer: Reload Window".
2. If OAuth sign-in fails, verify your GitHub account is active in the browser first.
3. If Chat panel doesn't open, try `Ctrl+Shift+I` (Windows) or `Cmd+Shift+I` (Mac).
4. If Chat seems unresponsive, click the model selector at bottom of Chat and confirm you're signed in.
5. Ask facilitator to help verify Copilot is activated and show you one prompt.

### Learning Moment

AI assistance amplifies clarity. Copilot is not just for code. It can also support clear writing and practical customization of your development environment.

</details>

<details>
<summary><strong>Chapter 14: Accessible Code Review</strong> - 2 Guided PR Review Challenges</summary>

### Challenge Set

1. **Review a practice PR and leave 2-3 inline comments**
   - Check out or view an assigned practice PR, read the diff, and post constructive feedback on 2-3 specific lines.

2. **Submit a formal review verdict**
   - Complete your review by submitting an approval, request-changes, or comment-only verdict on the PR.

### Expected Outcomes

- Student can navigate PR diffs with a screen reader.
- Student can post inline comments on specific lines.
- Student can write constructive feedback that helps the author improve.

### If You Get Stuck

1. If Files Changed tab won't open, reload the PR page and retry.
2. If inline comment button is hard to find, use the file tree to jump between files (`Press 3` in NVDA/JAWS).
3. If you're unsure what to comment on, focus on clarity: heading structure, link text, missing steps, or typos.
4. If submitting the review fails, check that you're not in draft mode and have write access to the repo.
5. Ask facilitator to help you navigate one diff and model one constructive comment.

### Learning Moment

Constructive review is a gift. Specific, kind feedback helps authors improve and builds trust in the community.

</details>

<details>
<summary><strong>Chapter 15: Issue Templates</strong> - 2-3 Guided Template Design Challenges Using Registration Template</summary>

### Challenge Set

**Estimated time:** 2-2.5 hours (includes YAML learning and remix practice)

**Sample files used in this challenge:**
- Source template: [`.github/ISSUE_TEMPLATE/workshop-registration.yml`](../../.github/ISSUE_TEMPLATE/workshop-registration.yml)
- Remix example: [`learning-room/docs/samples/chapter-15-registration-remix-example.yml`](./samples/chapter-15-registration-remix-example.yml)

The registration template you filled out on Day 1 is your teaching tool. It demonstrates YAML form-based templates with accessibility-first design.

1. **Analyze the registration template**
   - Open: `.github/ISSUE_TEMPLATE/workshop-registration.yml`
   - Read the YAML structure: frontmatter (name, description, title, labels) and field types
   - Notice field types: input, dropdown, textarea, markdown
   - Observe: each field has a label, description, and validation rule
   - Compare: How is this better than a blank issue form?
   - Evidence: Short comment explaining one way the template improved contributions

2. **Remix the registration template for a new context**
   - Take the registration template structure and adapt it for a different use case
   - Keep the YAML pattern, change the context: (e.g., bug report, workshop feedback, accessibility audit)
   - Update: field names, labels, descriptions, and dropdown options
   - Create: `.github/ISSUE_TEMPLATE/my-template.yml` in your test repository
   - Commit and push
   - Validate YAML syntax before pushing (for example: <https://www.yamllint.com/>)
   - Evidence: PR or comment linking to your remixed template

3. **Optional: Create a Markdown template**
   - Create: `.github/ISSUE_TEMPLATE/my-markdown-template.md`
   - Write YAML frontmatter (same pattern as registration template)
   - Add Markdown body with 3-4 sections and HTML comment instructions
   - Test in the template chooser if your repository supports it
   - Evidence: PR or comment linking to your Markdown template

### Expected Outcomes

- Student can read and understand YAML form template structure
- Student can adapt a professional template to a new context
- Student understands why templates improve contribution quality and consistency
- Student can create both YAML form-based and Markdown templates
- Student recognizes accessibility-first design in form templates

### If You Get Stuck

1. **Can't find the registration template?** Look in `.github/ISSUE_TEMPLATE/workshop-registration.yml` — that's the form you filled out to join.
2. **YAML structure confusing?** Start by copying the registration template. Modify only the field descriptions and labels first. Leave the structure intact.
3. **YAML not parsing?** Compare your file against the provided remix sample and validate indentation with two spaces per level.
4. **Not sure what context to remix for?** Try: bug report, feature request, workshop feedback, accessibility audit form, or event signup.
5. **Template doesn't appear in chooser?** Verify filename ends in `.yml` or `.md`, file is in `.github/ISSUE_TEMPLATE/`, and you pushed the commit. Try a fresh Issues tab reload.
6. **Repository permissions issue?** Ask facilitator for write access to a shared test repository.
7. **Want to see how it all works?** Ask facilitator to show you a template they created.

### Learning Moment

The best template is one you've already used. By remixing the registration template, you learned that template design is about pattern recognition and context adaptation, not starting from scratch every time. When you maintain a project later, you'll do this: analyze what worked, adapt it to your new context, then iterate. Professional templates exist because someone did this exercise and discovered what works. Your remix becomes their teachable example.

</details>

<details>
<summary><strong>Chapter 16: Accessibility Agents</strong> - 3-5 Guided Agent Exploration & Validation Challenges</summary>

### Starter Set (Use These First)

If 55 agents feels too broad, start with this sequence:
1. `@daily-briefing` (maps to repository navigation and issue awareness)
2. `@issue-tracker` (maps to Chapter 4 issue workflow)
3. `@pr-review` (maps to Chapter 6 and Chapter 14 review skills)

Once these feel comfortable, expand to specialist agents.

### Challenge Set

1. **Agent Discovery Mapping**
   - Read Section 3: The Ecosystem (55 agents across 3 teams)
   - Use the discovery framework: Skill you already have -> matching agent -> one safe first prompt
   - Match 3-5 agents to Day 1 skills you already have
   - Answer: *"I am ready for this agent because I have already [skill]"*
   - Evidence: Issue comment with your mapping (use `#16-agent-discovery` label)
   - Time: 20 minutes

2. **Agent Skill Validation**
   - Clone your fork of accessibility-agents repo
   - Open Copilot Chat and run one agent from your discovery list
   - Evaluate: Did the output match what you expected from manual experience?
   - Answer three evaluation questions in an issue comment (use `#16-agent-validation` label)
   - Time: 30 minutes

3. **Agent Instructions Deep Dive**
   - Read one `.agent.md` or `.prompt.md` file
   - Answer: What is this agent trying to do? What tools does it have access to?
   - Answer: Could this agent make a mistake? What kind?
   - Evidence: Issue comment with your analysis (use `#16-agent-internals` label)
   - Time: 15 minutes

### Optional Contribution Challenges (Day 2 Hackathon)

4. **Improve an Existing Agent** (45 min)
   - Find an agent gap or improvement opportunity
   - Edit the agent's instructions
   - Open a PR to accessibility-agents
   - Evidence: Your merged PR

5. **Propose a New Agent** (60 min)
   - Identify an uncovered workflow
   - File an issue with 3 example prompts
   - Discuss with maintainers
   - Evidence: Your issue with community discussion

### Capstone: Workshop Feedback (The Most Important Challenge!)

**This is not optional. Your feedback directly shapes the next cohort.**

6. **Share Your Experience - Workshop Feedback Form** (15-20 min)
   - You've completed (or are working through) two days with us.
   - Your constructive feedback helps us improve, helps future students, and teaches maintainers how to build better tools.
   - **This feedback will be read, discussed, and acted on.**
   - Open a new issue in git-going-with-github using the **Workshop Feedback** template
   - **Direct link:** [File Workshop Feedback](https://github.com/community-access/git-going-with-github/issues/new?template=feedback-workshop.yml)
   - Fill out as much or as little as you're comfortable sharing
   - No response is "wrong" - honest feedback is the only kind we want

   **What to cover (if you want to):**
   - Which agents were most useful?
   - Which agents confused you or didn't work as expected?
   - Did the chapter progression feel logical?
   - Was the workshop accessible to you? (screen reader users, keyboard users, neurodivergent learners, all welcome)
   - What concept will you remember in 6 months?
   - What should we change for next time?
   - Anything else? (Facilitator appreciation? Suggestions? Wild ideas?)

   **Evidence:** Your submitted feedback issue becomes part of our workshop archive and roadmap.

### Expected Outcomes

- Student can map Day 1 manual skills to specific agents in the ecosystem
- Student understands **Skill First, Agent Second** principle
- Student has used at least one agent in Copilot Chat
- Student can read and evaluate agent instructions
- **(Capstone)** Student has shared honest, constructive feedback that helps future cohorts
- (Optional) Student has contributed an improvement or proposal to the project

### If You Get Stuck

1. **Can't find matching agents?** Start with `@daily-briefing` or `@issue-tracker`—those build directly on Chapters 2-5.
2. **Agent output doesn't make sense?** That is valuable feedback. Paste it in an issue comment with your question. The error might point to a gap in the agent's instructions.
3. **Can't see agents in Copilot Chat?** Check: Is Copilot Chat extension installed (not just Copilot)? Are you signed in? Does `.github/agents/` folder exist in your cloned repo? Run `ls -la .github/agents/` to verify.
4. **Clone failed?** Use the terminal: `git clone https://github.com/[your-username]/accessibility-agents.git; cd accessibility-agents; code .`
5. **Feedback form feels overwhelming?** Answer just one question. Any feedback is valuable. Start with "What confused you the most?" - that's the most actionable for us.
6. **Still stuck?** Show facilitator: the agent you wanted to run, the output you got, and what you expected. They can verify setup.

### Learning Moment

The 55 agents exist because someone did the manual work first, then automated the repetitive parts. The principle **Skill First, Agent Second** exists to protect you: it keeps you from treating AI as magic. You already know the limits of automation because you have done the work by hand. That expertise lets you evaluate agents critically, catch their mistakes, and improve them. The agents that will exist in the future will be built by people in this room who saw a gap and filled it.

**Your feedback is the bridge between this workshop and the next one. Thank you for being honest. We are listening.**

</details>


## Group Challenges

These challenges require collaboration with your study group:

- **Group Documentation Sprint**: Collaboratively improve docs
- **Peer Review Circle**: Everyone reviews everyone
- **Accessibility Workshop**: Teach each other a11y topics
- **Challenge Creation**: Design new challenges together

[**View Group Challenges →**](GROUP_CHALLENGES.md)


## Need Help?

### Getting Unstuck
1. **Read bot feedback** (PR chapters only) - it includes specific fixes
2. **Check the chapter documentation** - each chapter file has full walkthroughs
3. **Ask your peer reviewer** - comment on your PR or issue
4. **Ask your study group** - use your group issue thread
5. **Ask facilitators** - @mention them in your issue or PR

### Resources
- [Automation Guide](../AUTOMATION.md) - Understanding bot feedback
- [PR Workflow](../../docs/06-working-with-pull-requests.md) - Step-by-step PR process
- [Accessibility Guide](../../docs/14-accessible-code-review.md) - Accessibility principles
