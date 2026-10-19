# Week 8: Make accepted events survive restart

MerchantDesk | Sprint 1 | D: SQL and Persistence + B: Backend Development + E: Engineering and Delivery

## The project need

Restarting the API currently loses all accepted events.

## Before you start

Bring the agreed model and HTTP tests. Use a disposable test database for tests, not your practice database. Follow the migration-runner interface in shared/database/README.md.

## Keep the application connected

Use the Week 6 API factory and keep all numbered migrations in the Week 8 migration directory. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

A fresh migration, parameterized storage and a restart proof. Milestone: Durable event flow.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                                                                                                        | Planned task minutes |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `D03.1` | DDL, constraints, timestamps and forward migrations. [PostgreSQL 17 tutorial](https://www.postgresql.org/docs/17/tutorial.html), [PostgreSQL constraints](https://www.postgresql.org/docs/17/ddl-constraints.html)                                                                                          |                  110 |
| `B03.1` | pg pooling, parameterized queries, dependency injection and shutdown. [Parameterized node-postgres queries](https://node-postgres.com/features/queries), [node-postgres pooling](https://node-postgres.com/features/pooling), [node-postgres transactions](https://node-postgres.com/features/transactions) |                  120 |
| `E06.1` | Database integration tests and restart evidence. [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/)                                                                                                                                                                                         |                   70 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Write and apply the first migration (`D03.1`)

- [ ] Create merchants and payment_events from the agreed field contract, including a foreign key, amount check and timestamp columns. Use the supplied runner via npm.cmd run migrate:practice -- students/RB1/week-08/database/migrations, replacing RB1. Read fixtures/migration-runner.ts and its support tests, then explain ordered version tracking, one-client transactions and repeat-run behavior. Write schema-relative SQL without transaction commands; do not invent runner plumbing in this task.

**Primary path:** `students/<student-id>/week-08/database/migrations/001-events.sql`.

**Proof for review:** An empty test database migrates; invalid amount/merchant writes fail; a second runner invocation preserves rows.

**Known trap:** Do not edit a migration after the shared cohort has applied it. Add a new migration.

### 2. Connect a pooled repository (`B03.1`)

- [ ] Replace the in-memory storage through a small injected repository. Use bounded Pool configuration, parameter placeholders and finally-based client release. Keep app construction separate from listening and close the pool on shutdown.

**Primary path:** `students/<student-id>/week-08/api/repository.ts`.

**Proof for review:** An event can be inserted and read through the HTTP API without SQL string interpolation or a leaked client.

**Known trap:** A transaction must stay on one checked-out client, not separate pool.query calls.

### 3. Prove persistence and isolate the test (`E06.1`)

- [ ] Use a dedicated test database/schema. Accept one event, close/rebuild the app, and read it back. Record the commands. Demonstrate that a failing database write is not reported as accepted.

**Primary path:** `students/<student-id>/week-08/api/persistence.db.test.ts`.

**Proof for review:** A real database-backed event survives app restart; test cleanup affects only the disposable test namespace.

**Known trap:** A mocked repository test cannot establish PostgreSQL persistence.

## Two-hour problem-solving block (`P08.1`)

**Focus:** Nested data and lookup.

Join small merchant/event arrays by ID in memory and preserve a merchant with no events; compare nested scans and a lookup.

**Evidence path:** `students/<student-id>/week-08/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/database/migrations/, shared/api/src/repository.ts and shared/api/test/persistence.db.test.ts`. Record scope, non-author review and actual proof in the [Week 8 contribution log](../shared/delivery/rotations/week-08.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 9](week-09.md).
