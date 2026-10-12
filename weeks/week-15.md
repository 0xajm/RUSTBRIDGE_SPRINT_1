# Week 15: Investigate a backend failure and rehearse its clean start

MerchantDesk | Sprint 1 | E: Engineering and Delivery + D: SQL and Persistence

## The project need

The application must be maintainable when something fails and when a different person starts it.

## Before you start

Use a reversible failure only in disposable/local test data. The maintainer chooses a fixture or condition, not a destructive change to a real database.

## Keep the application connected

Use the Week 6 API factory and keep all numbered migrations in the Week 8 migration directory. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

An evidence-led backend repair, an explained query plan and a corrected API runbook.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                          | Planned task minutes |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `E11.1` | Evidence-led debugging and regression tests. [Fastify logging](https://fastify.dev/docs/v5.7.x/Reference/Logging/), [Node 22 test runner](https://nodejs.org/docs/latest-v22.x/api/test.html) |                  120 |
| `D07.1` | EXPLAIN, filter/order alignment and measurement limits. [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/17/using-explain.html)                                                           |                   90 |
| `E11.2` | Setup instructions, fresh state and reproducibility. [Windows setup](../docs/02-windows-setup.md)                                                                                             |                   90 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Break, investigate and fix one failure (`E11.1`)

- [ ] Investigate one local failure such as a wrong DB URL, missing owner filter, unhandled SQL conflict. Record evidence and wrong guesses before changing code. Add a failing regression test, fix the cause and write a brief blameless postmortem.

**Primary path:** `students/<student-id>/week-15/incident/postmortem.md`.

**Proof for review:** Your evidence identifies the cause and a regression test catches the original bug.

**Known trap:** Never inject failures into another person's database or loosen validation until a test goes green.

### 2. Explain one index from the query (`D07.1`)

- [ ] Inspect the merchant list query with EXPLAIN on synthetic rows. Propose a supporting merchant/time/ID index and compare plans before/after on a suitable fixture size. Add it through a new migration if justified. Say why a tiny table may use a sequential scan correctly.

**Primary path:** `students/<student-id>/week-15/database/query-plan.sql`.

**Proof for review:** The index proposal matches actual filters/order and the explanation does not claim a measured speedup without evidence.

**Known trap:** An index is not automatically better for every table or write-heavy operation.

### 3. Rehearse a clean backend start (`E11.2`)

- [ ] Draft the backend runbook in week-15/delivery/clean-start-notes.md from NOTES.md and the wiring guide. Have a peer use a fresh named disposable database and npm ci to migrate, seed, start the API, sign in through the simulator and submit/list an event without verbal shortcuts. Record and fix confusing steps. Mark UI steps as pending until Weeks 16-17. Reuse these notes during the Week 19 rehearsal and consolidate them into the final runbook in Week 20; no future-week file is required now.

**Primary path:** `students/<student-id>/week-15/delivery/clean-start-notes.md`.

**Proof for review:** A non-author reaches the protected API and persisted event using written commands; missing steps are corrected and no browser completion is claimed yet.

**Known trap:** Do not delete or reset a personal or shared database to make the rehearsal look clean.

## Two-hour problem-solving block (`P15.1`)

**Focus:** Two-pointer reasoning.

Merge two sorted synthetic ID lists into one ordered list; explain pointer movement and input assumptions.

**Evidence path:** `students/<student-id>/week-15/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/delivery/incident.md, shared/database/migrations/ and shared/delivery/runbook.md`. Record scope, non-author review and actual proof in the [Week 15 contribution log](../shared/delivery/rotations/week-15.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 16](week-16.md).
