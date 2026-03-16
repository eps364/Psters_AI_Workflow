# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by Keep a Changelog.

## [0.1.0] - 2026-03-16

### Added

- Initial `psters-ai-workflow` plugin structure and manifests.
- Core command set:
  - `/brainstorm`
  - `/plan`
  - `/work-plan`
  - `/work`
  - `/review`
  - `/doc`
  - `/compound`
  - `/deploy-lambda`
  - `/commit-changes`
- Rules, skills, and agents migrated and generalized for project-agnostic usage.
- Context7 MCP integration via plugin `mcp.json` and guidance rule.
- Hook automation:
  - documentation guard on session stop
  - commit convention reminder
  - migration reminder
  - code/docs edit tracking
- Bilingual documentation baseline (English and Portuguese):
  - methodology
  - commands reference
  - Extreme Programming alignment
  - getting started
  - command recipes
  - hooks reference
  - FAQ
  - add-a-plugin guide
- Contribution and community files:
  - `CONTRIBUTING.md`
  - `CODE_OF_CONDUCT.md`
  - GitHub issue and PR templates
  - Discord community link in root README
- Repository governance and release scaffolding:
  - `LICENSE` (MIT)
  - this `CHANGELOG.md`
