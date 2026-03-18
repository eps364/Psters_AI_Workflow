# Operational Overrides (Project-level)

Use this file to override the default workflow operational policy from plugin rule `rules/operational-guardrails.mdc`.

Precedence:

1. Explicit user instruction in current chat
2. This file (`docs/workflow/operational-overrides.md`)
3. Plugin defaults in `rules/operational-guardrails.mdc`

## How to use

Set each policy as `required`, `recommended`, or `disabled` for this project.

```yaml
aws_cli_sso_login: recommended
lambda_deploy_via_scripts_only: required
allow_iac_lambda_deploy: disabled
typeorm_atomic_chain: required
verification_evidence_in_completion: required
```

## Notes

- Keep this file short and explicit.
- If a policy is omitted here, plugin default policy applies.
- This file is project-owned; teams can change it without editing plugin internals.
