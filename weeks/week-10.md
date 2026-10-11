# Week 10: Document and consume the continuing HTTP API

MerchantDesk | Sprint 1 | B: Backend Development + C: Client Integration + E: Engineering and Delivery

## The project need

Another engineer must be able to call the working API without guessing request bodies, paging or errors.

## Before you start

The Week 6 factory now uses the Week 8 database repository and Week 9 identity/paging behavior. Follow docs/13-api-documentation.md and copy its specification starter once.

## Keep the application connected

Use the Week 6 API factory and keep all numbered migrations in the Week 8 migration directory. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

A reviewed API description, a reproducible consumer and an explicit request/response boundary.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                                                                                                                                                    | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `B02.2` | HTTP contracts, OpenAPI paths, schemas, examples and response status codes. [OpenAPI 3.1 specification](https://spec.openapis.org/oas/v3.1.1.html), [Document the continuing API](../docs/13-api-documentation.md), [MerchantDesk API contract](../docs/04-api-and-security-contract.md)                                                                |                  100 |
| `C01.2` | HTTP request construction, status handling and client/server independence. [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), [HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview), [Document the continuing API](../docs/13-api-documentation.md)                                           |                  100 |
| `E04.2` | Headers, wire formats, safe public errors and documented limitations. [HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview), [MerchantDesk API contract](../docs/04-api-and-security-contract.md), [GitHub reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests) |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Describe the implemented API in OpenAPI (`B02.2`)

- [ ] Extend the supplied liveness specification with POST/list/detail event operations that your app currently implements. Describe public fields, strict input, query bounds, 200/201/400/409/413 outcomes and paging. Use synthetic examples. Mark login/ownership as planned until Weeks 11-12; never describe the unauthenticated lab as production-safe. Match the canonical contract, not internal DB rows.

**Primary path:** `students/<student-id>/week-10/api/openapi.json`.

**Proof for review:** A peer can construct a valid request and a changed-identity conflict from the specification, and compares documented responses with the real app. The JSON parses successfully.

**Known trap:** A syntactically valid OpenAPI file alone does not prove the server follows it.

### 2. Write a consumer from a peer's specification (`C01.2`)

- [ ] Read a peer's OpenAPI and make a small Node/TypeScript client for submit, list and detail. Use the local API, check response.ok and expected shape, and handle a 409, malformed input and an unreachable listener explicitly. Accept the local base URL through ignored environment configuration. Do not import server repository modules.

**Primary path:** `students/<student-id>/week-10/client/contract-client.ts`.

**Proof for review:** The peer reproduces the client against the continuing app; a non-2xx and a network failure are distinguished and neither is reported as acceptance.

**Known trap:** This is our API consumer, not a Stripe/Razorpay integration or another backend server.

### 3. Review HTTP exchanges against the contract (`E04.2`)

- [ ] Record redacted exchanges for created, repeated, conflicting, invalid and paged requests. Compare the JSON with the written contract and report one mismatch or explicitly state the checked cases. Explain Content-Type, the URL query string and why internal SQL must not appear in a response. Apply peer corrections to the same API/specification.

**Primary path:** `students/<student-id>/week-10/delivery/api-exchanges.md`.

**Proof for review:** The recorded requests run against your app and match its status/body; secrets and internal error details are absent. Any mismatch has a failing test and a reviewed fix.

**Known trap:** Do not invent evidence for authentication or readiness routes not implemented yet.

## Two-hour problem-solving block (`P10.1`)

**Focus:** Parsing and explicit errors.

Parse a bounded decimal paging string without accepting fractions/signs/empty input; return a typed result.

**Evidence path:** `students/<student-id>/week-10/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/api/openapi.json, shared/simulator/send-event.ts and shared/delivery/api-exchanges.md`. Record scope, non-author review and actual proof in the [Week 10 contribution log](../shared/delivery/rotations/week-10.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 11](week-11.md).
