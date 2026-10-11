# Week 4: Represent events and ask the first SQL questions

MerchantDesk | Sprint 1 | T: TypeScript and JavaScript + D: SQL and Persistence + E: Engineering and Delivery

## The project need

The merchant needs event counts, while fields such as amounts and event kinds need an agreed meaning.

## Before you start

Bring Week 1's inspector. Install PostgreSQL using setup sections 4-5 and load fixtures/practice.sql into your personal practice database. The fixture is supplied now, not promised by a later week.

## Outcome

Typed event data, real SQL answers and an explicit input contract.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                                   | Planned task minutes |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `T02.1` | Primitive types, arrays, object types, branches and iteration. [Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) |                  100 |
| `D01.1` | Tables, rows, SELECT, WHERE, ORDER BY and GROUP BY. [PostgreSQL 17 tutorial](https://www.postgresql.org/docs/17/tutorial.html)                                                                                                         |                  130 |
| `E02.1` | Runtime input, integer minor units, timestamps and non-goals. [MerchantDesk API contract](../docs/04-api-and-security-contract.md)                                                                                                     |                   70 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Work with a typed event list (`T02.1`)

- [ ] Define an event type using the actual fixture fields. Iterate over several events, select captured payments and count them. Compare a loop with filter. Explain one case where a missing value differs from zero.

**Primary path:** `students/<student-id>/week-04/typescript/event-list.ts`.

**Proof for review:** The captured count matches the fixture. npm.cmd run typecheck rejects an intentionally wrong assignment; restore valid code and rerun successfully before committing.

**Known trap:** Type annotations do not validate JSON received from another process.

### 2. Load and query the practice database (`D01.1`)

- [ ] Load the supplied SQL using the setup guide, then write queries for captured events, merchant totals and the latest events. Put answers and commands in NOTES.md. This is a personal practice database, not the shared final schema.

**Primary path:** `students/<student-id>/week-04/sql/first-queries.sql`.

**Proof for review:** Queries return real rows from the supplied fixture, including both merchants. State what one row means.

**Known trap:** Install time belongs inside this task's budget. Ask for setup help instead of borrowing a personal database.

### 3. Agree the event field rules (`E02.1`)

- [ ] Use docs/01-project-brief.md and fixtures/cases.json to specify required fields, bounds, allowed event kinds and the duplicate key. Explain why merchant identity will eventually come from authentication, not an arbitrary body field.

**Primary path:** `students/<student-id>/week-04/design/event-contract.md`.

**Proof for review:** Every fixture case has an expected accept/reject result and a reason. Money is expressed in integer paise, not floating point rupees.

**Known trap:** Sandbox event data is not authorization and this course does not process payments.

## Two-hour problem-solving block (`P04.1`)

**Focus:** Typed records and simple scans.

Find the first matching event ID in a typed array and return an explicit not-found result; compare loop and find.

**Evidence path:** `students/<student-id>/week-04/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/delivery/event-contract.md and shared/database/practice-notes.md`. Record scope, non-author review and actual proof in the [Week 4 contribution log](../shared/delivery/rotations/week-04.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 5](week-05.md).
