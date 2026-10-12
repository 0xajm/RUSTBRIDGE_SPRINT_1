# Week 20: Demonstrate and hand over the merchant application

MerchantDesk | Sprint 1 | E: Engineering and Delivery + C: Client Integration

## The project need

The product and learning evidence must survive the original builders and continue into Sprint 2.

## Before you start

Do not add new features this week. Bring the clean-start corrections, test matrix, approved contracts and authored contribution links.

## Keep the application connected

Use the Week 6 API factory and keep all numbered migrations in the Week 8 migration directory. Continue the Week 16 React client; do not start another client or move authorization into the browser. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

An independently reproducible local product, tested extension, short demo and attributable oral/repair evidence. Milestone: Independent handover.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                              | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `E12.1` | Actual architecture, migrations, seed accounts, tests and limitations. [Delivery documentation](../shared/delivery/README.md)                                                                     |                  120 |
| `C06.1` | User-focused demo and browser/API evidence. [MerchantDesk API contract](../docs/04-api-and-security-contract.md)                                                                                  |                   70 |
| `E12.2` | Clean-start proof, authorship and technical explanation. [Assessment and review](../docs/10-assessment.md), [Git book basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) |                  110 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Finish the runbook and architecture (`E12.1`)

- [ ] Consolidate the Week 15 clean-start notes and subsequent corrections into the final native-Windows runbook with clone/install, local configuration, database creation, migration/seed, API/UI start, tests, common failures and shutdown. Include a diagram matching actual code and a short next-sprint boundary. Propose the shared root README update in the shared-task PR.

**Primary path:** `students/<student-id>/week-20/delivery/runbook.md`.

**Proof for review:** A stranger can find every command, secret variable and dependency; unfinished product work is named, not hidden.

**Known trap:** Do not describe Docker, queues, Rust, deployment or real payments as implemented in Sprint 1.

### 2. Demonstrate the merchant's real actions (`C06.1`)

- [ ] Record a demo video under three minutes using synthetic data: login, one accepted fixture, a focused invalid/duplicate/conflict case, filtered/paged viewing, another merchant's rejection and logout. Include your bounded extension or link its separate short proof. Explain one UI/API/DB request path and state local-only and session-revocation limits. Link the video or a reviewable recording artifact in demo.md without committing large media or secrets.

**Primary path:** `students/<student-id>/week-20/delivery/demo.md`.

**Proof for review:** A non-author watches the real working demo and its focused negative case; the full written/test matrix covers the remaining cases. No real money, credentials or customer data appears.

**Known trap:** A polished screen does not replace backend evidence.

### 3. Complete the independent start and contribution record (`E12.2`)

- [ ] Have a non-author follow the final runbook and record commands/outcomes. Link your core task commits/PRs, bounded extension, shared contributions, case study and demo. Complete an oral review explaining one request-to-database path and a 30-minute no-AI repair of a small reversible defect with documentation allowed. Record technical proof, not private grades. Write two defensible resume statements and one improvement you can explain.

**Primary path:** `students/<student-id>/week-20/delivery/handover.md`.

**Proof for review:** The independent start succeeds, core and extension tests pass, and the reviewer records the explain-back/repair observation. Implementation claims are attributable; incomplete work is not labelled complete.

**Known trap:** Do not claim production ownership, Rust expertise or smart-contract work from this sprint.

## Two-hour problem-solving block (`P20.1`)

**Focus:** Explain-back and review.

Explain one prior solution without AI, state time/space costs and improve one weak test. This is foundation practice, not a hiring guarantee.

**Evidence path:** `students/<student-id>/week-20/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/delivery/runbook.md, shared/delivery/final-architecture.md, shared/delivery/demo.md and README.md`. Record scope, non-author review and actual proof in the [Week 20 contribution log](../shared/delivery/rotations/week-20.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] Independent start, bounded extension, demo and oral/no-AI checkpoint are reproduced

Next: preserve the completed contract, migrations and runbook for the Rust/PayHook sprint.
