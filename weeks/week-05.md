# Week 5: Functions, relational boundaries and first tests

MerchantDesk | Sprint 1 | T: TypeScript and JavaScript + D: SQL and Persistence + E: Engineering and Delivery

## The project need

The event contract must become reusable checks, and events must remain attached to a real merchant.

## Before you start

Bring the Week 4 contract and a loaded practice database. Use the fixture cases instead of searching for external data.

## Outcome

A reusable validation exercise, a relational model and tests that detect a bug.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                                                                                     | Planned task minutes |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `T03.1` | Functions, unknown, narrowing, return values and modules. [Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html), [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html), [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html) |                  110 |
| `D02.1` | Primary keys, foreign keys, joins, required fields and constraints. [PostgreSQL constraints](https://www.postgresql.org/docs/17/ddl-constraints.html), [PostgreSQL 17 tutorial](https://www.postgresql.org/docs/17/tutorial.html)                                                        |                  100 |
| `E03.1` | node:test, assertions, test cases and focused debugging. [Node 22 test runner](https://nodejs.org/docs/latest-v22.x/api/test.html)                                                                                                                                                       |                   90 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Validate a small unknown input (`T03.1`)

- [ ] Write a pure function that accepts unknown and returns either a small valid event or explicit issues. Handle null, wrong kinds and non-integer/out-of-range amounts. Keep validation separate from printing. Focus on the agreed subset; full route JSON Schema comes in Week 7.

**Primary path:** `students/<student-id>/week-05/typescript/validate-event.ts`.

**Proof for review:** Valid fixture records pass and bad amount, missing ID, null and unknown kind produce errors without a crash.

**Known trap:** An as Event assertion changes the compiler's view, not the received data.

### 2. Model and test the relationship (`D02.1`)

- [ ] Draw merchants and events with one-row meanings. In a new schema inside your practice database, create a small pair of related tables and try a broken foreign key and a duplicate primary key. Join events to merchant names and explain unmatched rows.

**Primary path:** `students/<student-id>/week-05/sql/relationships.sql`.

**Proof for review:** The database rejects the deliberate relational mistakes; your join result is explained in NOTES.md.

**Known trap:** Do not edit or destroy another student's data. The final shared migration is written in Week 8.

### 3. Prove and break the validator (`E03.1`)

- [ ] Add at least four tests, including one bad input. Run npm run test:practice -- followed by this test path. Deliberately remove a check, observe a failing test and restore it. Link one peer review.

**Primary path:** `students/<student-id>/week-05/typescript/validate-event.test.ts`.

**Proof for review:** A recorded test fails for the introduced bug and passes after restoration.

**Known trap:** A green run without an assertion does not prove validation.

## Two-hour problem-solving block (`P05.1`)

**Focus:** Boundary cases and tests.

Validate a provider ID against its length/character rules and explain tests at each boundary.

**Evidence path:** `students/<student-id>/week-05/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/delivery/data-model.md and shared/api/test/contract.test.ts`. Record scope, non-author review and actual proof in the [Week 5 contribution log](../shared/delivery/rotations/week-05.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 6](week-06.md).
