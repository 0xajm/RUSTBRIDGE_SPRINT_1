# Week 13: Consolidate correctness before adding polish

MerchantDesk | Sprint 1 | D: SQL and Persistence + B: Backend Development + E: Engineering and Delivery

## The project need

The protected backend needs reliable transaction and regression proofs before the client is added.

## Before you start

Consolidate the working protected backend. Use earlier labs and their failing tests; browser implementation is scheduled for Weeks 16-17. Retain all ownership and validation checks.

## Keep the application connected

Use the Week 6 API factory and keep all numbered migrations in the Week 8 migration directory. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

A coherent test matrix, one exercised transaction and corrected weak cases.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                               | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------: |
| `D06.1` | Transactions, rollback, client release and isolated state. [node-postgres transactions](https://node-postgres.com/features/transactions)                                                                           |                  100 |
| `B08.1` | Adversarial cases, timestamps, amount bounds and conflict semantics. [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/), [Node 22 test runner](https://nodejs.org/docs/latest-v22.x/api/test.html) |                  120 |
| `E09.1` | Risk-based tests, explain-back and focused revision. [Assessment and review](../docs/10-assessment.md)                                                                                                             |                   80 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Exercise rollback on one checked-out client (`D06.1`)

- [ ] In a disposable test namespace, perform two related writes, deliberately fail the second and prove the first was rolled back. Use one checked-out client, BEGIN/COMMIT/ROLLBACK and finally release. Explain why a single event insert does not need an artificial multi-step transaction.

**Primary path:** `students/<student-id>/week-13/database/rollback.ts`.

**Proof for review:** The deliberate failure leaves no partial first write and the pool remains usable afterward.

**Known trap:** Do not hold a database transaction around a network request.

### 2. Strengthen a weak boundary test (`B08.1`)

- [ ] Choose the weakest core API boundary and add a test that exposes it: amount coercion, impossible date, equal timestamp paging, changed duplicate content or cross-owner lookup. Fix the bug, then rerun the whole current suite. Improve parsing without loosening the agreed field contract.

**Primary path:** `students/<student-id>/week-13/api/boundary.db.test.ts`.

**Proof for review:** Your added test fails before the fix and passes afterward; the existing core checks remain green.

**Known trap:** A test relying on whichever row happens to come first is not stable.

### 3. Map requirements to evidence and revise (`E09.1`)

- [ ] Map each implemented V1 behavior to a unit, HTTP or real-database check. Mark browser proofs as scheduled for Weeks 16-18 rather than claiming they already ran. Add one missing backend proof and revisit a Week 4/5 concept from memory, then correct your explanation against the code.

**Primary path:** `students/<student-id>/week-13/quality/test-matrix.md`.

**Proof for review:** Every implemented backend milestone has a named check; not-yet-implemented browser checks are labelled pending and your revision records a real correction.

**Known trap:** Coverage percentages and green starter tests do not prove the completed merchant features.

## Two-hour problem-solving block (`P13.1`)

**Focus:** Stack basics.

Check balanced delimiters in a small string using a stack; handle empty and mismatched input.

**Evidence path:** `students/<student-id>/week-13/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/api/test/, shared/database/README.md and shared/delivery/test-matrix.md`. Record scope, non-author review and actual proof in the [Week 13 contribution log](../shared/delivery/rotations/week-13.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 14](week-14.md).
