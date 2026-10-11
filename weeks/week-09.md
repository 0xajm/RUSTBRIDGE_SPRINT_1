# Week 9: Handle repetition and bound the list

MerchantDesk | Sprint 1 | D: SQL and Persistence + T: TypeScript and JavaScript + B: Backend Development

## The project need

Repeated event IDs can create duplicate records, and an unbounded list can grow without limit.

## Before you start

Keep the app local-only until the auth and ownership work is complete. Use PostgreSQL uniqueness, not a SELECT-before-INSERT assumption.

## Keep the application connected

Use the Week 6 API factory and keep all numbered migrations in the Week 8 migration directory. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

Database-backed duplicate behavior and a stable, bounded listing contract.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                                 | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------: |
| `D04.1` | Composite uniqueness, ON CONFLICT and concurrent requests. [PostgreSQL constraints](https://www.postgresql.org/docs/17/ddl-constraints.html), [PostgreSQL INSERT and conflicts](https://www.postgresql.org/docs/17/sql-insert.html)  |                  110 |
| `T05.1` | Unions, interfaces, Map/Set basics and simple complexity reasoning. [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html), [Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) |                   90 |
| `B04.1` | Query validation, LIMIT/OFFSET and deterministic ordering. [PostgreSQL LIMIT and OFFSET](https://www.postgresql.org/docs/17/queries-limit.html), [Parameterized node-postgres queries](https://node-postgres.com/features/queries)   |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Protect event identity in the database (`D04.1`)

- [ ] Inspect existing rows for duplicate merchant/provider identities before adding the unique key (merchant_id, provider_event_id) through a new migration. If duplicates exist, preserve them and agree an explicit reconciliation with the reviewer; do not silently delete or reset. Test a fresh schema and the upgrade fixture. Define identical repeat as 200 with the existing ID, and changed content under the same identity as 409. Use an atomic insert/conflict path. Add a small test that starts two identical requests together. Keep the stated SQL artifact and include the applied forward migration as week-08/database/migrations/002-event-identity.sql in the same task commit.

**Primary path:** `students/<student-id>/week-09/database/deduplication.sql`.

**Proof for review:** Sequential and overlapping identical requests leave one row; the same ID with changed agreed fields returns 409 and keeps the first record.

**Known trap:** An in-process Set or pre-insert check alone does not protect concurrent database writes.

### 2. Give repository outcomes explicit types (`T05.1`)

- [ ] Model created, repeated and conflict results as a union. Show one pure HTTP mapping function and explain where a Map can help a practice lookup and where the database must remain authoritative. Add tests for each outcome.

**Primary path:** `students/<student-id>/week-09/typescript/repository-results.ts`.

**Proof for review:** The caller must handle every result variant. A note compares linear array lookup with a keyed lookup without invented benchmark claims.

**Known trap:** Do not add advanced generics or classes without a useful substitution boundary.

### 3. Add filtering and stable pagination (`B04.1`)

- [ ] Implement kind filtering plus limit 1-50 and non-negative offset. Order by received_at DESC, id DESC. Include merchant scope in the repository interface even though real principals arrive in Week 11. Test ties, no results and invalid bounds.

**Primary path:** `students/<student-id>/week-09/api/list-events.ts`.

**Proof for review:** Repeated reads of unchanged data have stable order and no page exceeds 50 rows.

**Known trap:** Offset pagination can shift when new rows arrive; document that limitation instead of promising snapshot paging.

## Two-hour problem-solving block (`P09.1`)

**Focus:** Complexity and deterministic order.

Sort synthetic timestamp/ID pairs with a deterministic tie-breaker; explain costs and test ties.

**Evidence path:** `students/<student-id>/week-09/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/database/migrations/002-event-identity.sql, shared/api/src/repository.ts and shared/api/src/routes/events.ts`. Record scope, non-author review and actual proof in the [Week 9 contribution log](../shared/delivery/rotations/week-09.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 10](week-10.md).
