# Learning Room Automation Setup & Maintenance Guide

## Overview

The Learning Room uses three interconnected GitHub Actions workflows to provide magical, real-time feedback to students as they work on challenges. This guide explains how the system works and how to maintain/extend it for future workshops.

### The Automation Stack

| Workflow | Purpose | Triggers |
|----------|---------|----------|
| `pr-validation-bot.yml` | Welcomes first-timers, validates PR structure | PR opened/edited/reviewed |
| `content-validation.yml` | Checks links, markdown, accessibility | PR opened/edited |
| `skills-progression.yml` | Awards badges, tracks progress, unlocks challenges | PR merged, issue closed |

---

## Architecture

### File Structure

```
learning-room/
├── .github/
│   ├── workflows/                 # GitHub Actions workflows
│   │   ├── pr-validation-bot.yml
│   │   ├── content-validation.yml
│   │   └── skills-progression.yml
│   └── scripts/                   # Support scripts
│       ├── validate-pr.js         # PR validation logic
│       ├── validation-report.js   # Report formatting
│       ├── comment-responder.js   # Auto-help responses
│       ├── check_links.py         # Link validation
│       ├── check_markdown.py      # Markdown structure
│       └── check_accessibility.py # Accessibility checks
├── package.json                   # Node.js dependencies
└── docs/                          # Challenge and documentation
    ├── CHALLENGES.md
    ├── GROUP_CHALLENGES.md
    └── [challenge files]
```

### How Student Branches Work

1. **Student creates a branch** from main to work on their challenge
   - Branch naming: `fix/studentname-issue123` or `feature/studentname-skill`
   
2. **Student opens a PR** against `main` (or their own tracking branch)
   - References the issue: `Closes #123`
   
3. **Workflows run automatically:**
   - `pr-validation-bot`: Validates structure, welcomes first-timers
   - `content-validation`: Checks links, markdown, accessibility
   - `skills-progression`: (Only runs on merge) Awards badges

4. **Student receives feedback** in PR comments within ~30 seconds

5. **Student makes updates** to their branch; workflows re-run automatically

6. **Peer reviewer approves** (facilitated by facilitator)

7. **PR is merged** → skills-progression workflow celebrates 🎉

---

## Workflow Details

### 1. PR Validation Bot (`pr-validation-bot.yml`)

**What it does:**
- ✅ Welcomes new contributors with orientation
- ✅ Validates PR has issue reference (`Closes #123`)
- ✅ Validates PR has meaningful description
- ✅ Provides educational feedback with links to resources
- ✅ Auto-responds to help requests in comments

**Key Scripts:**
- `validate-pr.js` — Checks PR requirements
- `validation-report.js` — Formats feedback
- `comment-responder.js` — Handles help requests

**Customization for Future Workshops:**
Edit `validate-pr.js` to change what's validated. Keep checks *encouraging* not *blocking*.

### 2. Content Validation (`content-validation.yml`)

**What it does:**
- ✅ Validates all markdown links exist
- ✅ Checks markdown structure (headings, lists, code blocks)
- ✅ Identifies accessibility issues (alt text, link text, tables)
- ✅ Provides clear, educational feedback

**Key Scripts:**
- `check_links.py` — Validates relative/absolute links
- `check_markdown.py` — Validates heading hierarchy, formatting
- `check_accessibility.py` — Checks for missing alt text, poor link text

**Customization for Future Workshops:**
Update the Python scripts to match your accessibility standards. The regex patterns control what gets flagged.

### 3. Skills Progression (`skills-progression.yml`)

**What it does:**
- ✅ Awards achievement badges when PRs merge
- ✅ Celebrates milestones (first PR, 5th PR, etc.)
- ✅ Tracks skill categories (markdown, accessibility, review, collaboration)
- ✅ Suggests next challenges to students

**Key Scripts:**
- Built into the workflow using `actions/github-script`

**Customization for Future Workshops:**
Edit the badge names, skill categories, and celebration messages in `skills-progression.yml` to match your workshop theme.

---

## Setup Instructions (For New Workshop)

### Prerequisites
- GitHub organization with access to create/edit workflows
- Node.js 20+ (for local testing)
- Python 3.11+ (for link validation)

### Step 1: Copy to New Repository

The learning-room workflows are **ready to replicate**. To use for a new workshop:

```bash
# Copy the entire .github directory from learning-room to your new repo
cp -r learning-room/.github your-new-learning-room/.github

# Copy package.json
cp learning-room/package.json your-new-learning-room/package.json

# Update docs references in workflows (search/replace paths)
# Example: Change `../docs/` paths to match your documentation structure
```

### Step 2: Customize for Your Workshop

**Edit `.github/workflows/pr-validation-bot.yml`:**
```yaml
# Change welcome message
welcomeBody: 'Your custom welcome message...'

# Update resource links to your documentation
```

**Edit `.github/workflows/skills-progression.yml`:**
```yaml
# Customize badge names and skill categories
badges:
  markdown: 'Your Badge Name'
  accessibility: 'Your Badge Name'
  # Add/remove skill types as needed
```

**Edit Python validation scripts (`.github/scripts/check_*.py`):**
```python
# Update accessibility standards to match your requirements
# Update link patterns, heading rules, etc.
```

### Step 3: Test Locally

```bash
cd learning-room

# Test PR validation script
node .github/scripts/validate-pr.js

# Test link checker
python .github/scripts/check_links.py .

# Test markdown validator
python .github/scripts/check_markdown.py .

# Test accessibility checker
python .github/scripts/check_accessibility.py .
```

### Step 4: Deploy to Repository

1. Push `.github/` directory to your repository
2. Ensure repository has GitHub Actions enabled
3. Create test PR to verify workflows run

---

## Maintaining & Extending

### Adding New Validation Rules

**To add a new check to PR bot:**

1. Edit `.github/scripts/validate-pr.js`
2. Add a new function, e.g., `checkMyRule()`
3. Push results to `results.required` or `results.suggestions`
4. Call your function in `runValidation()`

**Example:**
```javascript
function checkMyRule() {
  const passes = /* your check */;
  results.required.push({
    name: 'My Custom Rule',
    passed: passes,
    message: 'Clear message explaining what passed/failed',
    help: 'How to fix it'
  });
}
```

**To add a new Python validator:**

1. Create new file: `.github/scripts/check_yourcheck.py`
2. Add to workflow: `.github/workflows/content-validation.yml`
3. Ensure it writes output to `validation-feedback.json`

### Adding New Skill Categories

**To track new skills:**

1. Edit `.github/workflows/skills-progression.yml`
2. Add new label recognition:
   ```yaml
   if (labels.includes('skill: yourskill')) {
     skillType = 'yourskill';
     badgeName = '🎖️ Your Badge';
   }
   ```
3. Update `skillDescription` and other references
4. Consider adding to challenge issues with appropriate labels

### Monitoring & Troubleshooting

**Check workflow logs:**
- Go to Actions tab in repository
- Click workflow run
- Check "Annotations" tab for any issues

**Common Issues:**

| Issue | Solution |
|-------|----------|
| Python scripts not found | Ensure file permissions: `chmod +x check_*.py` |
| Node dependencies missing | Run `npm ci` before tests |
| Links broken in feedback | Update relative paths in Python scripts |
| Workflows not triggering | Check `on:` conditions and branch settings |

---

## Performance Considerations

### Workflow Optimization

The current setup:
- **Fast triggers**: Feedback within ~30 seconds
- **Efficient checks**: Python validators run in parallel
- **Caching**: npm dependencies cached between runs

**To optimize further:**
- Use workflow caching for large dependency sets
- Limit file validation to changed files only (advanced)
- Consider separate workflows for different check types

### Scalability

As student count grows:
- Current setup handles 100+ concurrent PRs
- API rate limits: GitHub allows 1000 API calls per workflow run
- If you hit limits: consolidate checks or split into multiple workflows

---

## Documentation Best Practices

Document your changes in `.github/README.md` or in your main Learning Room documentation:

### What to Document
- ✅ Which checks are enabled and why
- ✅ How to interpret bot feedback  
- ✅ How students request help from the bot
- ✅ What to do if bot feedback seems wrong
- ✅ How facilitators can override bot decisions

### Student-Facing Guide

Create a guide explaining:
- What the bot validates
- Why each check matters
- How to fix common issues
- When to ask for human review

---

## Future Enhancements

### Phase 2 Ideas
- [ ] Automated skill level progression (Beginner → Intermediate → Advanced)
- [ ] Progress dashboard showing student completion rates
- [ ] Custom challenge sequencing based on skill levels
- [ ] Peer review assignment automation
- [ ] Integration with GitHub Projects for progress tracking

### Community Contributions
This system is designed to be extended! Future contributors can:
- Add new validators
- Create educational resources
- Improve error messages
- Translate feedback to other languages

---

## Troubleshooting

### Workflows Not Running

**Check:**
1. Is GitHub Actions enabled? (Settings → Actions)
2. Do workflows have correct permissions? (Check `permissions:` field)
3. Is the branch protection rule blocking? (Settings → Branches)

**Fix:**
```yaml
# Ensure workflows have needed permissions
permissions:
  contents: read
  pull-requests: write
  issues: write
```

### Validation False Positives

**If bot rejects valid content:**
1. Check the specific validation rule in the Python/JS script
2. Consider if the rule is too strict
3. Update the rule or add an exception
4. Document the change

### Students Can't Trigger Actions

**Ensure:**
- Workflows have correct `on:` triggers
- Student branches push to the repository (not forks)
- No branch protection blocks the workflow permission

---

## Support & Questions

For help maintaining this automation:
1. Check the `.github/workflows/` comments
2. Review the script docstrings
3. Test changes locally before deploying
4. Keep changes documented for future maintainers

---

## License

These workflows and scripts are part of the Git Going with GitHub workshop and are available under the same license as your workshop materials (typically CC-BY-4.0 or MIT).

When you duplicate for a new workshop, maintain attribution where appropriate.

---

**Last Updated:** March 2026

**Maintained By:** [Workshop Lead]

**Contributing:** Improvements and updates welcome!
