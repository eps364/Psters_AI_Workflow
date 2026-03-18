# Extreme Programming (XP) and Psters AI Workflow

This document explains how the Psters AI Workflow aligns with Extreme Programming (XP).

## Why XP matters here

XP is a delivery discipline focused on fast feedback, small increments, and continuous improvement.
The Psters AI Workflow applies the same mindset with AI-assisted execution.

## Classic XP workflow (simplified)

```mermaid
flowchart LR
  A[User Story] --> B[Small Plan]
  B --> C[Implement]
  C --> D[Test and Validate]
  D --> E[Refactor]
  E --> F[Integrate]
  F --> G[Review Feedback]
  G --> A
```

## Psters AI Workflow

```mermaid
flowchart LR
  A["/pwf-brainstorm"] --> B["/pwf-plan"]
  B --> C["/pwf-work-plan per phase"]
  C --> D["/pwf-review"]
  D --> E["/pwf-commit-changes"]
  C --> F["/pwf-doc family"]
  F --> C
```

## Similarity map (XP -> Psters)

```mermaid
flowchart TB
  XP1[XP: User Story + Planning] --> PW1[Psters: /pwf-brainstorm + /pwf-plan]
  XP2[XP: Small Increment] --> PW2[Psters: /pwf-work-plan per phase]
  XP3[XP: Continuous Feedback] --> PW3[Psters: /pwf-review loop]
  XP4[XP: Refactor + Improve Design] --> PW4[Psters: /pwf-review findings + /pwf-work adjustments]
  XP5[XP: Shared Understanding] --> PW5[Psters: mandatory docs update in /pwf-work and /pwf-work-plan]
  XP6[XP: Sustainable Delivery Rhythm] --> PW6[Psters: phased execution + structured commits]
```

## Key differences

- XP is team- and code-practice centered.
- Psters AI Workflow is AI-orchestration centered.
- XP usually emphasizes TDD explicitly; Psters emphasizes contextualization, phased execution, and documentation-first memory for AI and humans.

## Practical takeaway

If you already work with XP, adopt Psters AI Workflow as your AI execution layer:

- Keep stories small.
- Plan before coding.
- Execute in phases.
- Run review loops.
- Update docs every cycle.

## `/pwf-doc` family in this flow

- `/pwf-work-plan` already updates documentation as part of its mandatory execution flow.
- `/pwf-work` also updates documentation in its own mandatory flow (useful for small fixes and minor adjustments outside a formal plan).
- Use `/pwf-doc` when you want to explicitly force technical documentation updates by scope.
- Use `/pwf-doc-foundation` for project baseline docs; `/pwf-doc-runbook` for operational runbooks.
- Use `/pwf-doc-capture` when you want to explicitly force a learning artifact (problem/solution or reusable pattern).
