# Commands Reference

This reference explains how to use the workflow commands in practice.

## Anti-vibe coding: context and documentation

**Contextualize the AI.** Before implementation, the AI must read existing documentation. `/work` and `/work-plan` enforce this: their first step is always reading docs, never editing code.

**Document continuously.** `/work` and `/work-plan` both **read and update docs** as part of their mandatory workflow. Documentation is operational memory for future AI and engineers. Do not skip the documentation step.

## Recommended default flow

`/brainstorm` -> `/plan` -> `/work-plan` -> `/review` -> `/commit-changes`

## `/doc` vs `/compound`

- `/work` and `/work-plan` already update docs as part of their mandatory execution flow.
- `/doc` is for explicitly forcing technical documentation generation/update for a specific scope.
- `/compound` is for explicitly forcing a learning artifact (problem/solution or reusable pattern).

## Command guide

### `/brainstorm`

Use to explore an idea and define implementation direction.

Use when:

- you are starting a new feature
- scope is unclear
- architecture decisions are still open

Expected output:

- clear decision baseline for planning

### `/plan`

Use to convert a brainstorm (or requirement) into executable phases and tasks.

Use when:

- you need implementation structure
- multiple steps/dependencies exist

Expected output:

- a phase-based plan with concrete tasks

### `/work-plan`

Use to execute one plan phase at a time.

Use when:

- a plan already exists
- you want controlled phase-by-phase execution

**Critical:** `/work-plan` reads docs first (Step 1), executes tasks (Step 2), then updates docs (Step 4). Documentation maintenance is mandatory.

Expected output:

- implemented phase plus updated status/checklist
- updated docs (module, feature, lambda, patterns)

### `/work`

Use for focused tasks that are outside formal planning.

Use when:

- fixing a small issue
- making local adjustments
- adding follow-up improvements after planned phases

**Critical:** `/work` reads docs first (Step 1), implements (Step 3), then updates docs (Step 5). Documentation maintenance is mandatory.

Expected output:

- implemented change with summary and next actions
- updated docs (module, feature, lambda, patterns)

### `/review`

Use to run a structured code review pass.

Use when:

- implementation is done for a phase or feature
- you want to catch regressions, risks, and complexity issues

Expected output:

- prioritized findings and recommendations

### `/compound`

Use to explicitly force a reusable project-knowledge artifact.

Use when:

- a problem was solved
- a pattern was discovered

Expected output:

- documented solution/pattern for future reuse

### `/doc`

Use to explicitly force technical documentation creation/update by scope.

Supported modes:

- `module <name>`
- `feature <name>`
- `architecture`
- `update`
- `adr <decision>`

Expected output:

- docs generated/updated with stale references corrected

### `/deploy-lambda`

Use to deploy Lambda-related changes with a guided flow.

Expected output:

- deployment result and remediation steps if needed

### `/commit-changes`

Use to generate high-quality, structured commits.

Use when:

- implementation is reviewed and ready to commit
- you want grouped commits by scope/topic/ticket

Expected output:

- clean commit set with clear messages
