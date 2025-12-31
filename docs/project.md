GitHub Project setup (recommended)
==================================

This repo is intended to be managed with **GitHub Projects (Projects v2)**.

## Why I couldn’t create it automatically

When attempting to create a Project for the `pm-inspire` owner, GitHub returned a permissions error. This usually means your account (or bot/app token) needs permission to create Projects for that owner/org.

So: create the Project from the GitHub UI (recommended), then link it to this repo and use the setup below.

## Create the Project

From GitHub:
- Go to your Projects: `https://github.com/users/pm-inspire/projects` (or org Projects page)
- Create a new Project (v2) named: **Yaqeen Backlog**

## Link the repo

In the Project UI:
- Project settings → **Linked repositories** → add `pm-inspire/Yaqeen`

This allows “Add item from repo” and better auto-complete for PRs/issues.

## Fields (minimal but practical)

Create these custom fields:

- **Status** (single select)
  - Triage
  - Backlog
  - Ready
  - In progress
  - In review
  - Blocked
  - Done

- **Priority** (single select)
  - P0
  - P1
  - P2
  - P3

- **Size** (single select)
  - XS
  - S
  - M
  - L
  - XL

- **Type** (single select)
  - Feature
  - Bug
  - Chore
  - Docs
  - Spike

Optional (if you want a bit more control):
- **Target** (single select): MVP, v0.1, v1.0, Later
- **Area** (single select): Backend, Frontend, DevEx, Infra, Docs, Security

## Views

Create these views (they cover 95% of workflows):

- **Board**
  - Layout: Board
  - Group by: Status
  - Sort: Priority (P0→P3), then updated

- **Backlog**
  - Layout: Table
  - Filter: Status is Backlog OR Triage
  - Columns: Title, Type, Priority, Size, Assignees, Labels

- **In progress**
  - Layout: Table
  - Filter: Status is In progress OR Blocked OR In review

- **Done (30d)**
  - Layout: Table
  - Filter: Status is Done AND Updated is within last 30 days

## Automation (simple, high-signal)

In Project settings → Workflows:

- **Item added to project** → set Status = Triage
- **Pull request merged** → set Status = Done (for items linked to PRs)
- **Issue closed** → set Status = Done

If you use “Ready” as a gate:
- **When Status changes to Ready** → add label `ready` (optional)

## Operating rule (keeps it clean)

- Every issue should have: Type + Priority + Status.
- “Triage” should be emptied frequently (push items to Backlog/Ready or close).
