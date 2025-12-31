Starter backlog
===============

This is a suggested backlog for a brand-new repository. You can convert each item into a GitHub Issue.

## Backlog structure

Suggested labels (optional):
- You can use the default repo labels (`bug`, `enhancement`, `documentation`, etc.).
- If you have permissions to add custom labels later, a common scheme is:
  - `type: feature`, `type: bug`, `type: chore`, `type: docs`, `type: spike`
  - `priority: p0`, `priority: p1`, `priority: p2`, `priority: p3`
  - `area: devex`, `area: docs`, `area: infra`, `area: security`

Suggested issue format:
- Title: clear “verb + object”, e.g. “Set up CI”
- Body: Summary, Acceptance criteria, Notes

## P0 (foundation)

### Define project scope and success criteria

- Goal: clarify what “Yaqeen” is and who it’s for.
- Acceptance criteria:
  - README describes purpose, target users, and a minimal “what it does”.
  - A short “MVP scope” section exists.

### Add repo standards (CODEOWNERS + CONTRIBUTING)

- Acceptance criteria:
  - `CODEOWNERS` added (if applicable).
  - `CONTRIBUTING.md` explains how to run tests/lint and submit PRs.

### Add issue + PR templates

- Acceptance criteria:
  - Bug report template
  - Feature request template
  - Chore template
  - PR template with checklist

### Add basic CI (lint + tests)

- Acceptance criteria:
  - GitHub Actions workflow runs on PR.
  - “required checks” can be enabled after workflow exists.

## P1 (developer experience)

### Add a minimal project skeleton

- Pick one:
  - Node/TypeScript app
  - Python package/service
  - Go service
  - Docs-only repo
- Acceptance criteria:
  - “hello world” build/run command documented.
  - One minimal test exists.

### Add formatting and lint config

- Acceptance criteria:
  - One command to format code
  - One command to run lint

### Add release/versioning plan

- Acceptance criteria:
  - Versioning strategy documented (SemVer, tags, changelog).

## P2 (quality + security)

### Add dependency update automation

- Acceptance criteria:
  - Dependabot or Renovate configured.

### Add security policy

- Acceptance criteria:
  - `SECURITY.md` with reporting instructions.

### Add license (if needed)

- Acceptance criteria:
  - `LICENSE` file chosen and added.

## Spikes (if you’re still deciding)

### Spike: decide tech stack and repo type

- Output: a short doc with stack choice and reasoning.

### Spike: define initial architecture

- Output: diagram + key decisions (storage, auth, hosting).
