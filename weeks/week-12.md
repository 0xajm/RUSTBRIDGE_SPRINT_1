# Week 12: Enforce merchant ownership across every route

MerchantDesk | Sprint 1 | D: SQL and Persistence + B: Backend Development + C: Client Integration

## The project need

A signed-in operator must not see or write another merchant's events.

## Before you start

Seed two synthetic merchants and one operator for each. Derive merchant ownership from a verified session and current database operator, never from the request body or URL alone.

## Keep the application connected

Use the Week 6 API factory and keep all numbered migrations in the Week 8 migration directory. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

A working authenticated event API with cross-merchant rejection. Milestone: Protected merchant flow.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `D05.1` | Owner-filtered SQL, join boundaries and foreign keys. [Parameterized node-postgres queries](https://node-postgres.com/features/queries), [PostgreSQL 17 tutorial](https://www.postgresql.org/docs/17/tutorial.html) |                  110 |
| `B06.1` | Authentication hooks, authorization and negative integration tests. [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/)                                                                              |                  120 |
| `C02.1` | Cookie-aware HTTP consumers and safe configuration. [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)                                                                           |                   70 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Scope every database operation (`D05.1`)

- [ ] Apply merchant_id filters to list, detail, conflict lookup and insertion paths. Resolve an operator's current merchant in the database. For an existing event owned by another merchant return the same 404 as a missing ID. Keep duplicate keys merchant-scoped.

**Primary path:** `students/<student-id>/week-12/database/owned-queries.sql`.

**Proof for review:** Merchant A cannot read B's event even with its exact ID. Each merchant may use the same provider_event_id independently.

**Known trap:** A hidden UI button is not database authorization.

### 2. Test the protected API end to end (`B06.1`)

- [ ] Test anonymous list/read/write, A reading B's known ID, a forged merchant_id field, and a valid A write. Reject the injected owner field through body validation. Cover login/logout origins and safe error bodies. Use the existing app factory and a disposable database.

**Primary path:** `students/<student-id>/week-12/api/ownership.db.test.ts`.

**Proof for review:** 401 for anonymous, 404 for another owner's detail, 400 for forged body field, and successful own-merchant requests. No test relies only on UI behavior.

**Known trap:** Ensure Fastify does not silently strip merchant_id and make the forged request look accepted.

### 3. Update the simulator to authenticate (`C02.1`)

- [ ] Read disposable credentials from local environment variables, log in, reuse the returned cookie on one event request, and send the configured Origin. Keep passwords/cookies out of output. Do not parse combined Set-Cookie strings by splitting on commas.

**Primary path:** `students/<student-id>/week-12/client/send-authenticated.ts`.

**Proof for review:** The same script succeeds for its merchant and fails without the cookie. A witness reproduces the flow.

**Known trap:** This is a sandbox API client, not a signed payment-provider webhook integration.

## Two-hour problem-solving block (`P12.1`)

**Focus:** Isolation and identity keys.

Group events by merchant plus provider ID; demonstrate how provider ID alone conflates two merchants.

**Evidence path:** `students/<student-id>/week-12/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/api/src/routes/events.ts, shared/api/test/ownership.db.test.ts and shared/simulator/send-event.ts`. Record scope, non-author review and actual proof in the [Week 12 contribution log](../shared/delivery/rotations/week-12.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 13](week-13.md).
