# Learning Room Automation - Facilitator Quick Reference

## What Students See

### When They Open a PR
1. **Welcome message** (if first-time contributor)
   - Explains what happens next
   - Links to helpful guides
   - Encourages questions

2. **Within 30 seconds**: Two validation reports
   - **PR Validation Report** — Structure, issue reference, description
   - **Content Validation Report** — Links, markdown, accessibility

3. **Automated help** when they comment
   - `@bot help` → Help resources
   - `merge conflict` → Conflict resolution guide
   - `request review` → Instructions for requesting review
   - `next challenge` → Available challenges

### When They Merge
- **Achievement badge** in PR comments celebrating their skill
- **Progress suggestions** pointing to next challenges
- **Encouragement** and next steps

---

## Your Role as Facilitator

You don't need to do what the bot already handles! Focus on:

✅ **What the bot handles:**
- Welcomes students
- Validates technical requirements
- Provides instant, objective feedback
- Tracks basic metrics

❌ **What needs human review:**
- Quality of the work (not just technical correctness)
- Understanding and learning (did they get the concept?)
- Creative solutions and improvements
- Peer feedback and mentoring
- Encouragement and motivation

### Time-Saving Tips

**Use bot feedback to focus:**
1. Only review PRs where bot said "Validation Passed"
2. Skip checking links/headings/alt text (bot already did)
3. Focus on the **human elements**:
   - Does the student understand what they fixed?
   - Is their explanation clear?
   - Can you suggest how they could improve further?

**Respond to students:**
- If bot gave tough feedback → soften it with encouragement
- If student disagrees with bot → you can override the decision
- Link to resources the bot recommended to reinforce learning

---

## Handling Common Scenarios

### "The bot said I'm wrong, but I'm right"

This is normal! The bot isn't perfect. **Your judgment matters.**

**What to do:**
1. Read bot feedback carefully
2. Examine student's work
3. If you agree with student → leave a comment explaining why
4. Facilitator judgment overrides bot checks

Example comment:
> The bot flagged this link as broken, but I can see it works correctly. Great job! ✅

### Student Is Stuck on Bot Feedback

**Help them:**
1. Click the links in bot's comment (resources are there)
2. Explain the "why" — not just the "what"
3. Show them a working example
4. Encourage them to try again

### Multiple PRs Need Review

**Triage by difficulty:**
1. **Quick wins** (bot passed validation) → Approve quickly
2. **Needs work** (bot flagged issues) → Comment with guidance
3. **Advanced** (complex changes) → Schedule deep review

---

## Customizing Feedback for Your Workshop

### Update Bot Messages

**Welcome message** (`.github/workflows/pr-validation-bot.yml`):
```yaml
welcomeBody = [
  '## Welcome! Custom message here',
  'Your specific workshop context',
  // ...
].join('\n');
```

**Help responses** (`.github/scripts/comment-responder.js`):
```javascript
// Edit what the bot says when students ask for help
// Add new keywords to trigger specific responses
```

**Skill badges** (`.github/workflows/skills-progression.yml`):
```yaml
# Change badge emoji and names:
badges = {
  'markdown': '🎖️ Your Custom Badge Name',
  'accessibility': '♿ Your Custom Badge',
  // ...
}
```

---

## Monitoring Progress

### Quick Check
- **Issues tab**: Filter by assignee → see who's working on what
- **Pull Requests tab**: See merged vs. in-progress
- **Discussions**: See student questions and conversations

### Metrics to Watch
- **PR count by student**: Who's most engaged?
- **Time to merge**: How long between PR open and merge?
- **Skill distribution**: Which skills are most/least practiced?
- **Resubmissions**: Do students fix issues and try again?

### Behind-the-Scenes
All workflow runs are logged in **Actions** tab. Check there if:
- Automation seems broken
- You need to debug why a check failed
- You want to see performance metrics

---

## Troubleshooting Issues

### "The Bot Didn't Comment"
**Check:**
1. Is it a PR to `main` branch? (Some workflows trigger only on main)
2. Are GitHub Actions enabled? (Settings → Actions)
3. Check Actions tab for workflow errors

**Fix:**
If workflow failed, you might need to:
- Update Python dependencies: Run locally first
- Check Python syntax: Validate scripts before merging
- Verify node dependencies: Check `package.json`

### "False Positive — The Link Is Valid"
**The bot probably:**
1. Found a relative path that doesn't exist *yet*
2. Checked relative to wrong directory
3. Didn't understand link format

**Your options:**
1. Leave a comment overriding the bot: "Actually, this link is fine!"
2. Ask student to fix the path to be more robust
3. Create an issue to update the validation rules

### "Student Keeps Getting Same Error"
**Help them directly:**
1. Explain what the error means
2. Show the exact fix needed
3. Pair program or pair review
4. Celebrate when they fix it

---

## Student Pain Points & Solutions

| Issue | Why It Happens | Your Response |
|-------|---|---|
| "Validation always fails" | They're not following PR format | Link to PR guidelines + example |
| "I don't understand the feedback" | Bot message is too technical | Explain in plain language |
| "The bot is wrong" | Validation rule is imperfect | Acknowledge + override if appropriate |
| "I'm a screen reader user, this is hard" | Workflow isn't accessible | Offer alt workflows or helper options |

---

## Weekly Facilitator Checklist

- [ ] Review open PRs with "needs-review" label (prioritize)
- [ ] Check for students stuck on validation (offer help)
- [ ] Look at Actions tab for any workflow failures
- [ ] Celebrate merged PRs in a community forum post
- [ ] Remove blockers preventing students from claiming issues

---

## Communication Examples

### Encouraging First-Timer
> Great first PR! The bot's feedback is just technical housekeeping. Your understanding of the material is clear. Let's fix these two link references and merge! 💪

### Explaining Bot Decision
> The bot flagged your link text as non-descriptive. Instead of "[read more](link)", try "[Understanding Git Branches](link)" so screen readers users know what they're clicking. Give it a try!

### Overriding Bot
> The bot said this link is broken, but I can verify it works. You found a real edge case! Approved ✅

### Celebrating Achievement  
> You crushed this! Look at that bot badge 🎖️ Not only did you learn the skill, but you did it *right*. You're ready for the next challenge.

---

## Key Principles

Remember: **The bot enables human connection, not replaces it.**

- Bot handles routine checks → You handle mentoring
- Bot gives instant feedback → You give meaningful feedback
- Bot celebrates wins → You celebrate their learning journey
- Bot sets standards → You uphold them with empathy

---

## Quick Links

- [Automation Setup & Maintenance](./SETUP_AND_MAINTENANCE.md)
- [Learning Room README](../README.md)
- [Challenge List](../docs/CHALLENGES.md)
- [Group Challenges](../docs/GROUP_CHALLENGES.md)

---

**Questions?** Check the setup guide or reach out in your facilitator Slack!
