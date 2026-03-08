# Learning Room Automation: Implementation Guide

This guide walks you through setting up and activating the complete Learning Room automation system from scratch.

## Overview

The Learning Room automation provides:
- **PR validation bot** with accessibility checking and educational feedback
- **Skills progression engine** with levels, badges, and challenges
- **Student pairing & grouping** system for peer review
- **Comprehensive documentation** for students and facilitators

**Time to implement:** 2-3 hours  
**Prerequisites:** GitHub repository with Actions enabled, basic Git/GitHub knowledge


## Pre-Implementation Checklist

Before starting, ensure you have:

- [ ] GitHub repository (public or private)
- [ ] GitHub Actions enabled (Settings → Actions → Allow all actions)
- [ ] Write permissions for GitHub Actions (Settings → Actions → Workflow permissions → Read and write)
- [ ] Permission to create Pull Requests enabled (Settings → Actions → Check "Allow GitHub Actions to create and approve pull requests")
- [ ] Admin access to the repository
- [ ] List of student GitHub usernames


## Step 1: Install Core Automation Files

### 1.1 Create Directory Structure

If not already present, create these directories:

```bash
mkdir -p .github/workflows
mkdir -p .github/scripts  
mkdir -p .github/data
mkdir -p .github/docs
mkdir -p learning-room/docs
```

### 1.2 Copy Workflow Files

Copy these three workflow files into `.github/workflows/`:

1. **`learning-room-pr-bot.yml`** - Main PR validation and feedback
2. **`skills-progression.yml`** - Progress tracking and achievements
3. **`student-grouping.yml`** - Peer pairing and study groups

### 1.3 Copy Validation Script

Copy **`validate-pr.js`** into `.github/scripts/`

This script performs the actual PR validation that the bot workflow calls.

### 1.4 Copy Data Files

Copy these templates into `.github/data/`:

1. **`challenge-progression.json`** - Skill levels, badges, and milestones
2. **`student-roster.json`** - Student information (update with your cohort)

### 1.5 Copy Documentation

Copy these docs:

- **`learning-room/AUTOMATION.md`** - Student guide to automation
- **`.github/docs/LEARNING_PATHS.md`** - Detailed skill progression paths
- **`learning-room/docs/CHALLENGES.md`** - Available challenge list
- **`learning-room/docs/GROUP_CHALLENGES.md`** - Collaborative exercises


## Step 2: Configure for Your Repository

### 2.1 Update Student Roster

Edit `.github/data/student-roster.json`:

```json
{
  "cohort": "Your Workshop Name Fall 2024",
  "facilitators": ["facilitator-username"],
  "students": [
    {
      "username": "actual-github-username",
      "name": "Student Display Name",
      "timezone": "America/New_York",
      "interests": ["accessibility", "documentation"],
      "pronouns": "they/them",
      "screenReader": false,
      "mergedPRs": 0,
      "currentLevel": "Beginner",
      "badges": [],
      "joinedDate" "2024-03-01"
    }
  ],
  "studyGroups": [],
  "notes": "Update as workshop progresses"
}
```

**For each student, provide:**
- `username` (required) - actual GitHub username
- `name` (optional) - display name for friendly messages
- `timezone` (optional) - for timezone-based grouping
- `interests` (optional) - for skill-based pairing
- `screenReader` (optional) - tracks accessibility needs

### 2.2 Customize Skill Progression (Optional)

Edit `.github/data/challenge-progression.json` if you want to:

- Change PR counts required for each level
- Modify badge names/emojis
- Adjust milestone celebration points
- Add new skill levels

**Default progression:**
- Beginner: 0+ PRs
- Intermediate: 1+ PRs
- Advanced: 3+ PRs
- Expert: 5+ PRs

### 2.3 Verify File Paths

The validation script expects files in:
- `learning-room/docs/` - practice documentation files
- `docs/` - workshop materials

If your structure differs, update paths in:
- `.github/scripts/validate-pr.js` → `checkFileLocation()` function
- Links in documentation files

### 2.4 Customize Bot Messages (Optional)

To personalize bot language, edit:

**`.github/workflows/learning-room-pr-bot.yml`:**
- Search for `body:` under each comment section
- Edit welcome messages, validation reports, and responses
- Keep Markdown formatting for accessibility

**`.github/scripts/validate-pr.js`:**
- Edit `message` and `help` fields in validation functions
- Update resource links to point to your docs
- Customize accessibility error messages


## Step 3: Test the Automation

### 3.1 Create a Test PR

**As a facilitator (before workshop):**

1. Create a new branch: `git checkout -b test-automation`
2. Make a small change to `learning-room/docs/welcome.md`
3. Commit and push: `git push -u origin test-automation`
4. Open a pull request to `main`

### 3.2 Verify Bot Comments (~30 seconds)

Check that the bot:
- [ ] Posts a comment on the PR
- [ ] Comment has structured sections (Required Checks, Suggestions, Accessibility, Resources)
- [ ] Labels are applied (documentation, needs-review, etc.)
- [ ] Commit status check appears (visible in PR checks section)

If no comment appears:
1. Check Actions tab for workflow runs
2. Click the workflow run and review logs
3. Common issues:
   - Permissions not set (see Step 1 checklist)
   - Syntax error in workflow YAML
   - Script path incorrect

### 3.3 Test Bot Interactions

In your test PR, add comments:

- `@bot help` - Bot should respond with help information
- Comment with "merge conflict" - Bot should provide conflict resolution guide
- Comment with "how do I request review" - Bot should respond with instructions

If bot doesn't respond to keywords:
- Check `respond-to-questions` job in workflow logs
- Verify `issue_comment` trigger is active
- Check that bot can post comments (permissions)

### 3.4 Test Skills Progression

Merge your test PR and verify:
- [ ] Skills progression workflow runs (check Actions tab)
- [ ] Bot posts achievement comment on merged PR
- [ ] Student's level is mentioned (should be "Beginner" for 1st PR)

### 3.5 Test Manual Grouping

1. Navigate to Actions tab
2. Select "Student Pairing & Grouping" workflow
3. Click "Run workflow"
4. Select strategy: `skill_match` (recommended)
5. Click "Run workflow"

Verify:
- [ ] Workflow completes successfully
- [ ] Study group issues are created
- [ ] Issues have label `study-group`
- [ ] Group members are tagged


## Step 4: Prepare Learning Content

### 4.1 Create Practice Issues

Create issues with intentional problems for students to fix.

**Using the challenges list:**

For each challenge in `learning-room/docs/CHALLENGES.md`:

1. **Create an issue:**
   - Title: `Challenge: [Challenge Name]`
   - Description: Copy from CHALLENGES.md
   - Labels: `challenge`, `challenge: [level]`, `skill: [type]`
   - Assignee: Leave unassigned (students claim them)

2. **Pre-seed beginner challenges:**
   - Create 1 issue per beginner student
   - Assign to that student
   - Label: `challenge: beginner`, `good first issue`

**Example issue template:**

```markdown
## Challenge: Fix Broken Link

**Difficulty:** Beginner  
**Estimated Time:** 10-15 minutes  
**Skills:** Markdown links, file paths

### Your Task

Find and fix the broken internal link in `learning-room/docs/welcome.md`.

### What You'll Learn

- Relative file paths in Markdown
- Testing links in preview
- Creating descriptive commits

### How to Start

1. Claim this issue by commenting "I'll take this!"
2. Create a branch: `fix/broken-link-[your-username]`
3. Edit the file and fix the link
4. Open a PR referencing this issue: "Closes #XX"
5. Wait for bot feedback and peer review

### Success Criteria

- [ ] Link points to correct file
- [ ] Link text is descriptive
- [ ] No other broken links introduced
- [ ] Bot validation passes
- [ ] Peer review approves

**Resources:**
- [Markdown Guide: Links](https://www.markdownguide.org/basic-syntax/#links)
- [Workshop: Working with PRs](../../docs/05-working-with-pull-requests.md)
```

### 4.2 Add Learning Files

Ensure `learning-room/docs/` contains files with intentional errors:

**`welcome.md`:**
- [TODO] markers to complete
- Missing content sections
- Placeholder text

**`keyboard-shortcuts.md`:**
- Heading hierarchy violations (H1 → H4 skip)
- Typos in links
- Incomplete table entries

**`setup-guide.md`:**
- Broken URLs (typos)
- [TODO] placeholders
- Missing alt text on images

Students will fix these during challenges.

### 4.3 Update References

In all documentation, ensure links point correctly:

- `../../docs/` - Workshop materials
- `../../learning-room/docs/` - Practice files
- `../../.github/docs/` - Learning paths
- `AUTOMATION.md` - Bot guide

Test all internal links before workshop.


## Step 5: Communicate to Students

### 5.1 Update Main README

Ensure `learning-room/README.md`:
- Mentions bot in contribution workflow
- Links to AUTOMATION.md guide
- Explains skills progression system
- Lists available challenges

### 5.2 Add to Workshop Agenda

In `docs/02-day1-agenda.md` (or your Day 1 materials):

**Block 5 - The Contribution Sprint:**

> When you open your PR, an automated bot will check your changes and provide feedback within 30 seconds. Read the bot's feedback carefully - it explains what to fix and links to resources for learning.
>
> The bot is NOT a substitute for peer review. After addressing bot feedback, always request review from your assigned peer reviewer.
>
> See [Learning Room Automation Guide](../learning-room/AUTOMATION.md) for details.

### 5.3 Pre-Workshop Announcement

Send to students before workshop:

> **Pre-Workshop Note:** This workshop uses intelligent automation! When you open pull requests, a friendly bot will provide instant feedback on accessibility and document quality. The bot teaches alongside human reviewers - you'll experience both automated checks (like real CI/CD systems) and human code review. No need to prepare anything, just be ready to learn!


## Step 6: During the Workshop

### 6.1 Introduce the Automation (Day 1, Block 5)

**Script:**

> "When you open your PR, you'll notice something happen within about 30 seconds. A bot will comment on your pull request. This is not grading you - it's teaching you.
>
> The bot checks for common issues: broken links, accessibility problems like heading skips or missing alt text, and whether your PR links to an issue. It explains WHY each thing matters and links to resources.
>
> Real-world software teams use automation exactly like this. CI/CD pipelines run tests, check code style, verify accessibility. You're learning to work with automated feedback, which is a key skill.
>
> BUT - and this is important - the bot is not a substitute for human review. Bots catch technical issues. Humans provide creative suggestions, encouragement, and mentorship. Always request review from your peer reviewer after addressing bot feedback.
>
> Let's look at what bot feedback looks like..."

**Demo a bot comment live** (use your test PR or create one on the spot).

### 6.2 Monitor Bot Behavior

Watch for:
- Bot comments appearing promptly (~30 seconds)
- Students understanding bot feedback
- Students not requesting human review (remind them!)
- Bot false positives (override with facilitator comment)

### 6.3 Highlight Skills Progression

When first student merges:

> "Look at your PR - the skills engine just tracked your achievement! You earned a badge and it shows your progress toward the next level. This gamification is intentional - it motivates continued contribution and helps you see your growth."

### 6.4 Create Study Groups (Optional)

If workshop has 6+ students:

1. Navigate to Actions → "Student Pairing & Grouping"
2. Run workflow with `skill_match` strategy
3. Announce group assignments
4. Explain that groups will review each other's work


## Step 7: Troubleshooting

### Bot not commenting

**Check Actions tab:**
- Workflow runs visible? (should trigger on PR opened/edited)
- Workflow failed? Click to see logs
- If no runs: workflow file may have syntax error

**Check permissions:**
- Settings → Actions → Workflow permissions → Read and write 
- Settings → Actions → Allow GitHub Actions to create PRs 

**Check bot account:**
- Comments are posted by `github-actions[bot]`
- Verify bot has access to repository

### Incorrect validation results

**Check script logic:**
```bash
# Test validation script locally
cd .github/scripts
node validate-pr.js
```

**Common issues:**
- File paths don't match repo structure
- Regex patterns too strict/lenient
- Missing error handling

**Quick fix during workshop:**
- Facilitator overrides bot with comment
- Files issue labeled `automation-feedback` for later

### Skills not unlocking

**Check workflow trigger:**
- Must be merged PR (closed via merge, not manual close)
- PR must be in `learning-room/` directory
- Issue must be linked with "Closes #XX"

**Manual fix:**
Edit `.github/data/student-roster.json`:
```json
{
  "username": "student",
  "mergedPRs": 1,  // Increment manually
  "currentLevel": "Intermediate"  // Update level
}
```

### Peer reviewers not assigned

**Check roster:**
- `.github/data/student-roster.json` has student entries
- Usernames are correct (case-sensitive)
- At least 2 students in roster (can't assign self)

**Manual assignment:**
- Use PR sidebar → "Reviewers" → select manually
- Bot assignment is convenience, manual works too


## Step 8: Post-Workshop Review

### 8.1 Collect Automation Feedback

Create issue: "Automation Retrospective"

```markdown
## Automation Retrospective

Help us improve the Learning Room automation!

### What worked well?
- Which bot feedback was most helpful?
- Did skills progression motivate you?
- Was peer pairing effective?

### What needs improvement?
- What bot feedback was confusing?
- What validation rules were too strict/lenient?
- What would you add or change?

### General thoughts
- Did automation enhance or detract from learning?
- Was the balance of bot + human review right?
- Would you recommend this system to future cohorts?
```

Label: `automation-retrospective`

### 8.2 Analyze Metrics

Check repo Insights → Pulse for:
- Number of PRs opened vs merged
- Average time to first bot response
- Average time to first human review
- Number of issues opened from bot feedback

### 8.3 Review Bot Accuracy

Look through merged PRs:
- How many bot warnings were valid?
- Any false positives flagged?
- Any issues bot missed?

### 8.4 Update for Next Cohort

Based on feedback:
- Improve validation rules in `validate-pr.js`
- Clarify bot messages in workflow
- Adjust skill level requirements
- Add new challenges based on gaps
- Update student-facing documentation


## Advanced: Customizations

### Adding New Validation Checks

Edit `.github/scripts/validate-pr.js`:

```javascript
function checkMyNewRule() {
  // Your validation logic
  return {
    passed: true/false,
    message: "Description of what's wrong",
    help: "How to fix it"
  };
}

// Add to main validation flow
const results = {
  passed: true,
  required: [
    checkIssueReference(),
    checkDescription(),
    checkMyNewRule(),  // Add here
    //...
  ]
};
```

### Creating Custom Badges

Edit `.github/data/challenge-progression.json`:

```json
{
  "badges": {
    "custom-skill": {
      "emoji": "",
      "title": "Custom Achievement",
      "description": "Completed custom challenge"
    }
  }
}
```

Then update workflow to award it when relevant challenge completes.

### Adjusting Grouping Algorithm

Edit `.github/workflows/student-grouping.yml`:

Find `assign-peer-reviewer` job → `getReviewerByStrategy()` function.

Add new strategy:

```javascript
if (strategy === 'my_strategy') {
  // Your custom pairing logic
  // Return username of selected reviewer
}
```

### Integration with External Tools

**Slack notifications:**
Add webhook calls in workflows to post to Slack when:
- Student reaches new level
- Milestone achieved
- Review needed

**Progress dashboard:**
Create GitHub Pages site that reads `student-roster.json` and displays:
- Leaderboard
- Badge gallery
- Challenge completion matrix


## Additional Resources

### For Students
- [Automation Guide](../../learning-room/AUTOMATION.md) - How the bot works
- [Learning Paths](LEARNING_PATHS.md) - Skill progression details
- [Available Challenges](../../learning-room/docs/CHALLENGES.md) - Challenge list

### For Facilitators
- [FACILITATOR.md](../../FACILITATOR.md) - Workshop facilitation guide
- [GitHub Actions Docs](https://docs.github.com/en/actions) - Workflow reference
- [GitHub GraphQL API](https://docs.github.com/en/graphql) - For advanced automation

### Example Implementation
See this repository as working example of full system.


## Implementation Checklist

Print this before starting:

### Setup
- [ ] Repository configured (Actions enabled, permissions set)
- [ ] All workflow files copied to `.github/workflows/`
- [ ] Validation script at `.github/scripts/validate-pr.js`
- [ ] Data files in `.github/data/` (updated with student info)
- [ ] Documentation files in place

### Testing
- [ ] Test PR created and bot commented
- [ ] Bot keyword responses work (@bot help)
- [ ] Skills progression triggers on merge
- [ ] Manual grouping workflow runs successfully

### Content
- [ ] Practice files have intentional errors
- [ ] Challenge issues created
- [ ] All internal links tested
- [ ] README mentions automation

### Communication
- [ ] Students notified about automation
- [ ] Workshop materials reference bot
- [ ] Facilitators trained on system

### Launch
- [ ] Test PR merged and archived
- [ ] Students invited to repository
- [ ] First issues assigned
- [ ] Facilitators ready to monitor


*Questions about implementation? Open an issue or reach out to facilitators!*

**Estimated total setup time:** 2-3 hours  
**Ongoing maintenance:** ~15 minutes per cohort (update roster, create issues)  
**Impact:** Instant feedback for all students, reduced facilitator burden, professional CI/CD experience


This automation system transforms the Learning Room into a GitHub Skills-quality experience while maintaining the human connection that makes learning meaningful.
