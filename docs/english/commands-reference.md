# Commands Reference

This reference explains all workflow commands in depth.

## Command summary (jump links)

- [`/pwf-help`](#pwf-help)
- [`/pwf-setup`](#pwf-setup)
- [`/pwf-setup-workspace`](#pwf-setup-workspace)
- [`/pwf-brainstorm`](#pwf-brainstorm)
- [`/pwf-plan`](#pwf-plan)
- [`/pwf-clarify`](#pwf-clarify)
- [`/pwf-checklist`](#pwf-checklist)
- [`/pwf-analyze`](#pwf-analyze)
- [`/pwf-work-plan`](#pwf-work-plan)
- [`/pwf-work`](#pwf-work)
- [`/pwf-work-light`](#pwf-work-light)
- [`/pwf-work-tdd`](#pwf-work-tdd)
- [`/pwf-review`](#pwf-review)
- [`/pwf-doc`](#pwf-doc)
- [`/pwf-doc-foundation`](#pwf-doc-foundation)
- [`/pwf-doc-runbook`](#pwf-doc-runbook)
- [`/pwf-doc-capture`](#pwf-doc-capture)
- [`/pwf-doc-refresh`](#pwf-doc-refresh)
- [`/pwf-aws-lambda-deploy`](#pwf-aws-lambda-deploy)
- [`/pwf-commit-changes`](#pwf-commit-changes)

## Control model (critical)

- The developer decides path and strictness.
- AI executes the selected command rigorously.
- Commands do not auto-switch strategy by AI judgment.

## Documentation model (critical)

- `/pwf-work` and `/pwf-work-plan` are docs-first and docs-maintaining by default.
- `/pwf-doc*` commands are explicit documentation outputs when you need targeted control.
- This is how standards persist across future AI sessions and human contributors.

## Recommended default flow

`/pwf-brainstorm` -> `/pwf-plan` -> `[optional: /pwf-clarify /pwf-checklist /pwf-analyze]` -> `/pwf-work-plan` -> `[/pwf-review when needed]` -> `/pwf-commit-changes`

## Command naming

Technology-specific commands must use a technology/provider prefix. See `command-naming-convention.md`.

## `/pwf-help`

Purpose: explain the full command system and recommended next step.

Use when:

- onboarding a new contributor
- choosing what to run next
- asking for command explanations without execution

Expected result:

- map of available commands
- recommended flow by scenario

## `/pwf-setup`

Purpose: initialize or repair the project docs skeleton under `docs/`.

Use when:

- project has no baseline docs structure
- you need deterministic command behavior from day one

Expected result:

- mandatory docs paths created if missing
- baseline files created (`infrastructure`, `architecture`, `integrations`, `environments`, `glossary`, runbooks index)
- workflow overrides file created when absent

## `/pwf-setup-workspace`

Purpose: create or repair the recommended multi-root project structure (`*_Repos` + `*_Workspace`) and generate a `.code-workspace` file for Cursor/VS Code.

Use when:

- starting a new multi-repo project,
- organizing frontend/backend repositories under one base path,
- separating code repositories from centralized workflow/docs context.

Expected result:

- `<ProjectName>_Repos` and `<ProjectName>_Workspace` structure ready,
- frontend/backend repo folders created or linked,
- workspace file generated for multi-root opening,
- migration guidance for existing repositories (non-destructive by default).

## `/pwf-brainstorm`

Purpose: define scope, decisions, risks, and architecture direction before planning.

Use when:

- feature direction is still open
- architecture decisions are not explicit yet
- requirements are fragmented

Expected result:

- clear decision baseline for planning
- assumptions and open questions surfaced

## `/pwf-plan`

Purpose: convert brainstorm or requirements into executable phases/tasks.

Use when:

- implementation spans multiple steps
- dependencies and sequencing matter

Expected result:

- phase plan with concrete tasks
- execution order and expected outputs

## `/pwf-clarify`

Purpose: resolve high-impact ambiguity before execution.

Use when:

- acceptance criteria are unclear
- architecture/scope questions remain

Expected result:

- clarification artifact linked to the plan
- decisions integrated into execution context

## `/pwf-checklist`

Purpose: create requirement-quality gates (not test suites).

Use when:

- you want objective pre-execution quality checks
- domain concerns need explicit coverage (API, UX, security, data, observability)

Expected result:

- checklist files in `docs/plans/<plan-slug>/checklists/`
- pass/fail oriented requirement checks

## `/pwf-analyze`

Purpose: run read-only cross-artifact consistency analysis.

Use when:

- requirements and tasks may be mismatched
- terminology or plan/docs consistency is uncertain

Expected result:

- prioritized inconsistency report
- uncovered requirement/task mappings

## `/pwf-work-plan`

Purpose: execute one planned phase at a time.

Use when:

- a plan already exists
- you want controlled, predictable execution

Critical behavior:

- reads docs first
- implements current phase tasks
- updates docs and plan/checklist status

Expected result:

- implemented phase with verification evidence
- synchronized documentation state

## `/pwf-work`

Purpose: execute focused unplanned work with the same discipline.

Use when:

- fix or change is small and targeted
- task is outside a formal phase plan

Critical behavior:

- reads docs first
- implements scoped change
- updates docs before completion

Expected result:

- completed focused change
- updated docs and clear next actions

## `/pwf-work-light`

Purpose: minimal-overhead lane for trivial/local changes.

Use when:

- expected change is very small
- no schema/API/auth model evolution is needed

Expected result:

- fast implementation with proof of verification
- avoids heavy orchestration when unnecessary

## `/pwf-work-tdd`

Purpose: explicit tests-first execution lane.

Use when:

- user explicitly requests TDD flow
- change benefits from red-green-refactor discipline

Expected result:

- iterative red-green-refactor slices
- verification evidence per cycle

## `/pwf-review`

Purpose: run multi-agent review to identify risks, regressions, and design issues.

Use when:

- a phase/feature is implemented
- deeper quality/risk coverage is desired

Expected result:

- prioritized findings with actionable fixes

## `/pwf-doc`

Purpose: explicit technical documentation generation/update by scope.

Supported modes:

- `module <name>`
- `feature <name>`
- `infrastructure`
- `architecture`
- `update`
- `adr <decision>`

Expected result:

- scoped canonical docs updated with anti-drift behavior

## `/pwf-doc-foundation`

Purpose: create or refresh baseline project docs as an integrated flow.

Use when:

- onboarding context is missing or stale
- baseline docs need consistency (`infrastructure`, `architecture`, `integrations`, `environments`, `glossary`)

Expected result:

- baseline docs updated under `docs/`
- consistency checks across foundation documents

## `/pwf-doc-runbook`

Purpose: create/update operational runbooks for incidents and operations.

Use when:

- service/process recovery steps are unclear
- deployment/rollback/escalation playbooks are missing

Expected result:

- runbook in `docs/runbooks/`
- runbook index updated

## `/pwf-doc-capture`

Purpose: capture reusable engineering learnings.

Use when:

- a non-trivial problem was solved
- a repeatable pattern emerged

Expected result:

- reusable problem/solution or pattern artifact

## `/pwf-doc-refresh`

Purpose: curate lifecycle of existing solution docs.

Use when:

- docs may be stale, duplicated, or superseded
- you want explicit per-doc decisions

Expected result:

- per-doc lifecycle decision (`Keep`, `Update`, `Replace`, `Archive`)
- approved refresh actions applied

## `/pwf-aws-lambda-deploy`

Purpose: guided deployment flow for Lambda repos/changes.

Use when:

- Lambda code or operational config changed

Expected result:

- deployment status and remediation guidance if failures occur

## `/pwf-commit-changes`

Purpose: create structured, high-quality commits.

Use when:

- implementation is verified and ready to commit
- you want clean grouping by scope/topic/ticket

Expected result:

- focused commit set with clear messages
