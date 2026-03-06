# How the Learning Room Automation Works - Student Guide

## What Is This Automation?

When you open a pull request (PR) in the Learning Room, magic happens! ✨

**Three automated helpers instantly review your work:**

1. **PR Validation Bot** — Welcomes you, checks your PR structure
2. **Content Validator** — Checks links, markdown, and accessibility  
3. **Skills Tracker** — Celebrates your wins when you merge

They're designed to give you instant, educational feedback so you can learn faster.

---

## The Magic Happens in Three Stages

### Stage 1: You Open a Pull Request

```
You: Create branch → Make changes → Open PR
Bot: Runs immediately ⚡
You: See feedback in ~30 seconds ✨
```

**What the bot checks:**
- ✓ Is your PR linked to an issue? (`Closes #123`)
- ✓ Did you describe what you changed?
- ✓ Do all your links work?
- ✓ Is your markdown formatted correctly?
- ✓ Are there accessibility issues? (alt text, link text, etc.)

**What happens:**
1. If it's your first PR → Welcome message with orientation! 🎉
2. Two comment blocks appear → One for PR structure, one for content
3. Each comment explains what passed and what needs fixing
4. **If something failed → Don't worry!** It's a learning moment

### Stage 2: You Make Updates

```
You: Read feedback → Update your PR → Push changes
Bot: Runs again immediately ⚡
You: See new feedback in ~30 seconds ✨
```

The bot **updates its feedback** every time you push, so you always see the latest status.

### Stage 3: Review & Merge

```
You: PR passes validation ✓ Peer review ✓
You: Request peer review from facilitator
Reviewer: Approves your work
You: Click "Merge" button
Bot: Awards achievement badge 🏆
```

When your PR is merged, the bot celebrates your achievement and suggests the next challenge!

---

## Understanding Bot Feedback

### The PR Validation Report

Shows technical requirements about your PR itself.

**Example:**

```
✅ Issue Reference        PR is correctly linked to an issue
❌ PR Description        Provide a description with 20+ characters
⚠️ Link Text            Your PR uses non-descriptive link text
```

**What it means:**
- ✅ Green = Passed (you're good!)
- ❌ Red = Needs fixing (this blocks merge)
- ⚠️ Yellow = Suggestion (nice to improve, not required)

### The Content Validation Report

Shows issues in the files you changed.

**Example:**

```
### Required Fixes
- File: "docs/example.md" (Line 15): Image has no description
- File: "docs/example.md" (Line 22): Link to non-existent file: ../bad-path.md

### Suggestions
- Add a description before your table explaining what data it contains
```

**Learning tip:** Click the file name to jump right to the problem!

---

## Common Feedback & How to Fix It

### "PR must reference an issue"

**What it means:** Your PR description should link to the challenge issue.

**How to fix:**
1. Go to your PR
2. Click "Edit" on the PR description
3. Add this line: `Closes #ISSUE_NUMBER`
   - Replace `ISSUE_NUMBER` with your challenge issue number
4. Save

**Example:** Your challenge is issue #42, so write: `Closes #42`

### "Image has no description"

**What it means:** Your image needs alt text so screen reader users know what it shows.

**How to fix:**
1. Find the image syntax: `![](image.jpg)`
2. Add a description between the brackets: `![Screenshot of GitHub interface](image.jpg)`
3. Describe what you see in the image in 5-20 words

### "Non-descriptive link text"

**What it means:** Your link text like "click here" doesn't explain where it goes.

**What the bot found:**
- ❌ Bad: `[click here](../docs/guide.md)`
- ✅ Good: `[Markdown Guide](../docs/guide.md)`

**How to fix:**
Replace vague text with specific words describing the link destination.

### "Link to non-existent file"

**What it means:** The file you're linking to doesn't exist or the path is wrong.

**How to fix:**
1. Double-check the file path
2. Verify the file actually exists in the repo
3. Correct the path if needed

**Example:**
- ❌ Wrong: `[link](../docs/markdnown-guide.md)` (typo in filename)
- ✅ Right: `[link](../docs/markdown-guide.md)` (typo fixed)

---

## Using Bot Auto-Responses

Stuck? The bot can help! Comment on your PR with these phrases:

### Help Requests

**Say:** `@bot help` or `I need help`

**Bot responds with:** Links to guides and common solutions

### Merge Conflicts

**Say:** `merge conflict` or `I have a conflict`

**Bot responds with:** Step-by-step conflict resolution guide

### Review Requests

**Say:** `how do I request review` or `request a review`

**Bot responds with:** Instructions for assigning a reviewer

### Next Challenge

**Say:** `what's next` or `next challenge`

**Bot responds with:** Where to find your next challenge

---

## What Happens After Merge

### Achievement Badge 🏆

When your PR is merged, the bot posts an **achievement comment** celebrating what you learned!

**Example:**

```
## Achievement Unlocked! 🏆

📝 Markdown Master — You mastered proper markdown syntax!

Merged PR #42 (closes #15)
Challenge: Fix Markdown Formatting in Documentation

### What's Next?
✅ Check your Learning Path for the next challenge
📖 Explore available challenges
💬 Claim the next issue with a comment
```

**Why this matters:**
- Your achievement is logged in the repository
- You can share your PR in your portfolio
- You've demonstrated real open source skills!

### Next Challenge Suggestions

The bot looks at available challenges and suggests your next one.

You can claim it by commenting: `I'd like to work on this challenge!`

---

## When the Bot Gets It Wrong

The bot isn't perfect! Sometimes it makes mistakes or you disagree with its feedback.

**What to do:**

1. **Read the feedback carefully** — Understand what the bot thought
2. **Explain your reasoning** — Comment on the PR saying why you think it's correct
3. **Request human review** — Ask your facilitator to look at it
4. **Facilitator decides** — They can override the bot if you're right

**Example comment:**

> The bot flagged this as a broken link, but I can see the file exists at `../docs/file.md`. Can you double-check?

---

## Pro Tips

### 📝 Tip 1: Write Descriptive PR Descriptions

Instead of: `I fixed some stuff`

Write: `This PR fixes the broken link in the getting-started guide and adds alt text to all images so screen reader users can understand the diagrams.`

The bot gives better feedback when it understands what you changed!

### ✅ Tip 2: Push Early, Fix Often

Don't wait until your PR is perfect! Push early, see the bot feedback, and fix it step by step. Each push triggers new feedback.

### 🔗 Tip 3: Test Links Locally

Before pushing, verify your links work:
1. Check the file path exists: `ls ../docs/filename.md`
2. Verify relative path is correct: `../` goes up one level

### 💪 Tip 4: Learn From Feedback

Each bot comment includes links to guides explaining the topic. **Click them!**

The bot is teaching you the skills as it validates your work.

### 🎤 Tip 5: Ask Questions in Comments

Have a question about feedback? Comment on your PR!

- Peer will see it
- Facilitator will see it  
- Community will see it
- Everyone learns together

---

## Frequently Asked Questions

### Q: Does the bot always approve?

No! The bot checks technical requirements. If it finds issues, it explains how to fix them. Your **human reviewer** checks if you learned the concept.

### Q: Can I ignore the bot?

The bot catches common mistakes early. Ignoring it usually means more revision rounds. Better to fix things fast!

### Q: What if I disagree with the bot?

Tell your facilitator! They can override the bot if you're right. Facilitator judgment always wins.

### Q: How long do validations take?

Usually **30 seconds to 1 minute**. If it takes longer, your PR might have an error. Check the Actions tab.

### Q: Can the bot review my actual work?

No! The bot checks technical requirements (links, formatting, etc.). **A human reviewer** checks if your work is correct and if you learned the concept.

### Q: What if I have a question while waiting for feedback?

Comment on your PR! Ask your question publicly. Facilitators and peers can help.

### Q: Can I delete the bot's comments?

You *can*, but **don't**. The comments are part of your learning record. Future you will appreciate being able to see what you fixed!

---

## How This Helps You Learn

| What the Bot Does | How It Helps |
|------------------|-------------|
| Instant feedback | You don't wait days → You stay engaged |
| Educational explanations | You learn *why* (not just *what*) |
| Links to resources | You can go deeper if interested |
| Celebrates wins | You see your progress grow |
| Consistent standards | Everyone gets the same feedback |
| Frees up reviewers | Humans focus on mentoring, not mechanics |

---

## What Bot Comments Are Saved?

Your bot comments become part of:
- ✅ Your GitHub profile (contribution history)
- ✅ The PR (permanently visible)
- ✅ The repository (learning artifact)
- ✅ Your portfolio (if you share it)

**This is real open source work!**

---

## When You're Stuck

**Remember: Feeling stuck means you're learning.** 

Here's the support path:

1. **Read bot feedback** + click its resource links
2. **Search for similar PRs** in the learning room (learn from others)
3. **Comment asking for help** (bot auto-responds to keywords)
4. **Ask your facilitator** (they're there to unblock you)
5. **Pair with a peer** (sometimes explaining helps)

**You belong here. Keep going! 🚀**

---

## Resources

- [Opening Your First PR](../../docs/OPENING_FIRST_PR.md)
- [Markdown Guide](../../docs/MARKDOWN_REFERENCE.md)
- [Accessibility Standards](../../docs/ACCESSIBILITY_GUIDE.md)
- [Challenge List](./docs/CHALLENGES.md)
- [GitHub Help](https://docs.github.com/en)

---

**Questions about the automation?** Mention `@facilitator` in an issue or PR comment!

*This automation is created just for you — to help you learn faster, get quick feedback, and celebrate your wins.* 🎉
