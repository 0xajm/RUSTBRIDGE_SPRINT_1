# Week 19: Build one bounded extension and prepare the portfolio

MerchantDesk | Sprint 1 | B: Backend Development + E: Engineering and Delivery + C: Client Integration

## The project need

Every student needs attributable implementation evidence without turning the common product into ten unrelated applications.

## Before you start

Complete the core merchant flow and Week 18 failure checks first. Select one scope from docs/15-individual-extension.md and agree its proof before adding code. Reuse the existing API, database and React client.

## Keep the application connected

Use the Week 6 API factory and keep all numbered migrations in the Week 8 migration directory. Continue the Week 16 React client; do not start another client or move authorization into the browser. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

One bounded tested extension, an attributable case study and a rehearsed complete demo.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                  | Planned task minutes |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `B11.1` | Scope control, backward-compatible changes and tested integration. [Bounded individual extension](../docs/15-individual-extension.md), [MerchantDesk API contract](../docs/04-api-and-security-contract.md)           |                  100 |
| `E14.1` | Authorship, trade-offs, hard-problem explanation and honest career evidence. [Assessment and review](../docs/10-assessment.md), [Git book basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) |                  100 |
| `C06.2` | User-focused demonstrations, safe synthetic data and portfolio communication. [MerchantDesk API contract](../docs/04-api-and-security-contract.md), [Delivery documentation](../shared/delivery/README.md)            |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Implement a small reviewed extension (`B11.1`)

- [ ] Choose merchant-owned CSV export, one separate bounded merchant-owned search endpoint, or a request/incident diagnostic improvement from the extension guide. State the user need, exact paths, limit, failure cases and estimate before review. Implement it in your continuing app with tests, companion code and forward migrations only if justified. Update your canonical API specification for any endpoint change. Do not add a new framework.

**Primary path:** `students/<student-id>/week-19/extension/plan.md`.

**Proof for review:** A reviewer reproduces the new behavior and one failure; the existing core suite stays green. Evidence identifies your implementation rather than inherited shared code.

**Known trap:** An extension does not replace any core task, make real payments or require adding every student's feature to shared/.

### 2. Write an attributable technical case study (`E14.1`)

- [ ] Write a short case study with user need, architecture, one hard problem, your failed approach, tested fix and one improvement. Link your authored core/extension commits and reviews. Distinguish your own app, shared contributions and supplied helpers. Draft two defensible resume statements; do not claim production, Rust or blockchain work from this sprint.

**Primary path:** `students/<student-id>/week-19/portfolio/case-study.md`.

**Proof for review:** A peer can trace every implementation claim to code and proof and ask you to explain one trade-off. No secrets or private grades appear.

**Known trap:** A shared repo URL or generated essay is not evidence that you personally implemented each feature.

### 3. Rehearse the complete portfolio demonstration (`C06.2`)

- [ ] Plan a demo under three minutes showing the core operator flow and your bounded extension. Prepare synthetic records for paging, duplicates/conflict and two-merchant isolation, and choose a focused negative case to show. Check setup steps and the updated OpenAPI; save credentials only in ignored configuration. Rehearse without silently changing the product contract.

**Primary path:** `students/<student-id>/week-19/delivery/demo-plan.md`.

**Proof for review:** A peer follows the planned sequence, sees real requests/results and identifies your extension and one limitation. The plan fits the time limit without exposing credentials.

**Known trap:** Do not use a public tunnel, paid deployment or a polished video to replace clean-start and backend test evidence.

## Two-hour problem-solving block (`P19.1`)

**Focus:** Revisit a weak earlier problem.

Choose the same mentor-assigned earlier exercise for the cohort, solve it without copied code and compare the new explanation with the first attempt.

**Evidence path:** `students/<student-id>/week-19/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/delivery/extension-decisions.md and shared/delivery/portfolio-guide.md`. Record scope, non-author review and actual proof in the [Week 19 contribution log](../shared/delivery/rotations/week-19.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 20](week-20.md).
