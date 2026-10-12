# Week 7: Receive one event end to end

MerchantDesk | Sprint 1 | B: Backend Development + C: Client Integration + E: Engineering and Delivery

## The project need

The merchant must accept a useful event and reject malformed input consistently.

## Before you start

Bring the app factory and field contract. Use Fastify's built-in JSON Schema; do not introduce a second validation framework.

## Keep the application connected

Continue the Week 6 API factory with in-memory storage. Database-backed migrations begin in Week 8; no migration directory is required yet. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

A simulator request reaches the API and is visible through a list endpoint. Milestone: First local event flow.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                                  | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `B02.1` | JSON Schema, request limits, safe errors and in-memory persistence. [Fastify validation](https://fastify.dev/docs/v5.7.x/Reference/Validation-and-Serialization/), [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/) |                  130 |
| `C01.1` | Node fetch, request bodies, HTTP errors and client/server separation. [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)                                                                           |                   90 |
| `E05.1` | Reproduction, diagrams and restart limitations. [Assessment and review](../docs/10-assessment.md)                                                                                                                                     |                   80 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Add the validated event route (`B02.1`)

- [ ] Add POST /api/events and GET /api/events plus GET /api/events/:id to your lab. Return 404 for a missing record ID; merchant authorization arrives in Weeks 11-12. Validate the full body shape and enforce the agreed amount bounds and event kinds. Configure coercion/removal deliberately so bad types and unexpected owner fields are rejected rather than silently rewritten. Add good and bad injection tests. Export registerEventRoutes and register it in week-06/api/app.ts, replacing the earlier demonstration GET. Later repositories are injected into this same route module.

**Primary path:** `students/<student-id>/week-07/api/events.ts`.

**Proof for review:** A valid event gets 201 and can be listed and read by ID; a missing ID gets 404; invalid type, missing ID and oversized body get deliberate failures. Database persistence and auth are still later tasks.

**Known trap:** Keep the lab loopback-only. A typed request body alone is not runtime validation.

### 2. Write the first API consumer (`C01.1`)

- [ ] Send one fixture event to the local API with Node fetch, inspect response.ok and parse the response safely. Try one malformed request. This is an API consumer script, not React yet.

**Primary path:** `students/<student-id>/week-07/client/send-event.ts`.

**Proof for review:** The script records the accepted ID and reports a non-2xx as a failure instead of claiming success.

**Known trap:** Fetch can resolve successfully when HTTP returns 400; a network rejection is a different failure.

### 3. Witness the flow and update the diagram (`E05.1`)

- [ ] Have a peer run the simulator -> API -> list flow. Record actual commands, one invalid request and what disappears after restart. Update the architecture with actual local ports.

**Primary path:** `students/<student-id>/week-07/delivery/first-flow.md`.

**Proof for review:** A non-author reproduces the flow and can explain the persistence gap.

**Known trap:** Do not claim durable acceptance or a production webhook service from this demonstration.

## Two-hour problem-solving block (`P07.1`)

**Focus:** Sets and duplicate identity.

Find repeated IDs in a fixture list with a Set while retaining first-seen order; explain why this is not database deduplication.

**Evidence path:** `students/<student-id>/week-07/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/api/src/routes/events.ts, shared/simulator/send-event.ts and shared/delivery/first-flow.md`. Record scope, non-author review and actual proof in the [Week 7 contribution log](../shared/delivery/rotations/week-07.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 8](week-08.md).
