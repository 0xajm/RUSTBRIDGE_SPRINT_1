# Week 6: Cross the HTTP boundary without losing the model

MerchantDesk | Sprint 1 | B: Backend Development + T: TypeScript and JavaScript + E: Engineering and Delivery

## The project need

Another program must send or request events without sharing the API's memory.

## Before you start

Read the HTTP contract in docs/04-api-and-security-contract.md. PostgreSQL practice and TypeScript exercises continue; do not replace them with a standalone framework course.

## Keep the application connected

Start the continuing API factory this week. Database-backed migrations begin in Week 8; no migration directory is required yet. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

A tiny HTTP application, observable async behavior and an API plan.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                                                                                              | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `B01.1` | HTTP methods, paths, headers, status, JSON and app factories. [HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview), [Fastify getting started](https://fastify.dev/docs/v5.7.x/Guides/Getting-Started/), [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/) |                  120 |
| `T04.1` | Promises, await, try/catch, JSON parsing and cleanup. [Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)                                                                                                                                              |                  100 |
| `E04.1` | Request/response contracts and design trade-offs. [MerchantDesk API contract](../docs/04-api-and-security-contract.md), [HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)                                                                                               |                   80 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Build and inspect a tiny Fastify API (`B01.1`)

- [ ] Copy the immutable fixtures/api-starter once into your week-06/api folder as described in docs/12-application-wiring.md. Continue its exported createApp factory and separate server.ts listener. Add an in-memory GET /api/events returning a few synthetic records, send a request with curl.exe and add an app.inject test in app.test.ts. Run the app with npm.cmd run dev:student -- BE01, replacing BE01. Bind to loopback and retain this entry point in later weeks.

**Primary path:** `students/<student-id>/week-06/api/app.ts`.

**Proof for review:** An annotated exchange names method, URL, response status and JSON. The test runs without opening a network port.

**Known trap:** The in-memory lab is local and temporary. It has no authentication yet and must not be publicly exposed.

### 2. Observe async work and failure (`T04.1`)

- [ ] Read the supplied fixture with node:fs/promises. Compare an awaited result with the Promise itself. Handle a missing file and malformed JSON deliberately; pass parsed data through the earlier checks. Explain why async is not a new thread for each request.

**Primary path:** `students/<student-id>/week-06/typescript/async-reader.ts`.

**Proof for review:** Successful and failing runs terminate with useful, safe messages. A parsing failure is not mistaken for an empty event list.

**Known trap:** Catch only what you can explain; do not catch every error and return success.

### 3. Review the API and schema together (`E04.1`)

- [ ] Specify the initial POST/list/detail routes, field rules, error shape and the future owner filter. Draw the request path and name the limits of the in-memory version. Compare the plan with Week 5's relational model.

**Primary path:** `students/<student-id>/week-06/design/api-contract.md`.

**Proof for review:** A peer can name what belongs in HTTP, validation and persistence, and what is missing before public deployment.

**Known trap:** Do not invent queue, Rust service or microservice boundaries in Sprint 1.

## Two-hour problem-solving block (`P06.1`)

**Focus:** Strings and maps.

Build a character-frequency Map and find the first non-repeated character; explain memory use.

**Evidence path:** `students/<student-id>/week-06/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/api/src/app.ts and shared/delivery/api-contract.md`. Record scope, non-author review and actual proof in the [Week 6 contribution log](../shared/delivery/rotations/week-06.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 7](week-07.md).
