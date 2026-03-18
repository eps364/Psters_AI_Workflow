> Source: `docs/english/command-recipes.md`

# Command Recipes

Practical command sequences for common day-to-day cases.

## New feature from scratch

1. `/pwf-brainstorm`
2. `/pwf-plan`
3. `/pwf-clarify`
4. `/pwf-checklist`
5. `/pwf-analyze`
6. `/pwf-work-plan` (one phase per chat)
7. `/pwf-review` (fix + re-run)
8. `/pwf-commit-changes`

## Small fix (no full plan needed)

1. `/pwf-work-light` (or `/pwf-work` when not trivial)
2. `/pwf-review`
3. `/pwf-commit-changes`

Use this for minor adjustments and targeted bug fixes.

## Bootstrap multi-root project structure

1. `/pwf-setup-workspace <project-name> <base-path>`
2. Open generated `<project-name>.code-workspace`
3. `/pwf-setup`
4. `/pwf-doc-foundation all`

Use this when you want to separate code repos from centralized workflow/docs context.

## Explicit tests-first request (optional TDD)

1. `/pwf-work-tdd`
2. `/pwf-review`
3. `/pwf-commit-changes`

## Create or refresh canonical docs

1. `/pwf-doc module <name>` or `/pwf-doc feature <name>`
2. Optional: `/pwf-doc architecture` or `/pwf-doc update`

Use when you want to explicitly force technical documentation output.

## Create or refresh project baseline docs

1. `/pwf-doc-foundation all` (or a specific target: `infrastructure`, `architecture`, `integrations`, `environments`, `glossary`)

Use when onboarding docs are missing or stale.

## Create or update operational runbooks

1. `/pwf-doc-runbook <service-or-operation>` (e.g. `payments-api`, `deploy-backend`)
2. Optional: `/pwf-doc-runbook index` to refresh the runbook index

Use when a service needs incident-ready troubleshooting and recovery steps.

## Capture reusable learning

1. `/pwf-doc-capture <context>`
2. Optional: `/pwf-doc-capture pattern <context>`

Use when you solved a problem that should become team memory.

## Lambda delivery flow

1. Implement with `/pwf-work` or `/pwf-work-plan`
2. `/pwf-review`
3. `/pwf-aws-lambda-deploy`
4. `/pwf-commit-changes`
