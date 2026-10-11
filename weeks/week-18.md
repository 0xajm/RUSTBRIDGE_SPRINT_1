# Week 18: Make failures visible and requests bounded

MerchantDesk | Sprint 1 | B: Backend Development + C: Client Integration + E: Engineering and Delivery

## The project need

A slow database, bad request or expired session should produce a useful failure rather than a misleading demo.

## Before you start

Reuse the existing suite and GitHub workflow. Do not introduce AWS, Docker, Redis or a monitoring vendor. Native Windows remains the primary run path.

## Keep the application connected

Use the Week 6 API factory and keep all numbered migrations in the Week 8 migration directory. Continue the Week 16 React client; do not start another client or move authorization into the browser. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

Bounded endpoints, redacted diagnostic logs and deliberate client errors.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                         | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------: |
| `B09.1` | Body/query limits, timeouts, readiness and structured logs. [Fastify logging](https://fastify.dev/docs/v5.7.x/Reference/Logging/), [node-postgres pooling](https://node-postgres.com/features/pooling)       |                  120 |
| `C05.1` | Recoverable errors, accessible feedback and duplicate-submit prevention. [React quick start](https://react.dev/learn), [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) |                   80 |
| `E10.1` | Existing checks, real DB tests and Windows/Linux portability. [GitHub Actions](https://docs.github.com/en/actions)                                                                                           |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Bound and diagnose the API (`B09.1`)

- [ ] Enforce the 16 KiB event body cap, bounded page/filter inputs and database connection/query timeouts. Keep liveness separate from readiness: readiness must fail when the database cannot serve a simple check. Log request ID, route, outcome and safe event ID, with cookie/auth/password/session key redaction.

**Primary path:** `students/<student-id>/week-18/api/operation.ts`.

**Proof for review:** Oversized body and unavailable DB have deliberate failures; a request ID traces one fault without credentials in logs.

**Known trap:** A process being alive is not evidence that it can store events. No unbounded payload logging.

### 2. Make the client honest during failure (`C05.1`)

- [ ] Exercise 401, a 400 response, empty data and a stopped API on the existing login/list/detail interface. Preserve useful filter state, label errors, disable an in-flight login or navigation action and offer a retry for failed reads. Event submission stays in the API/simulator; no event-entry form is required. Do not add automatic write retries that hide an event's identity.

**Primary path:** `students/<student-id>/week-16/client/src/App.tsx`.

**Proof for review:** A peer can distinguish not signed in, no matching records and a failed request; retry does not invent extra events.

**Known trap:** Do not show a success toast before checking the response.

### 3. Verify the current CI gate (`E10.1`)

- [ ] Explain the committed starter jobs and extend the database suite discovery with your actual .db.test.ts tests. The existing PostgreSQL service runs practice-fixture checks; it is not proof of product migrations. Add a product migration test and demonstrate one deliberately failing check locally and, once published, on a real PR.

**Primary path:** `students/<student-id>/week-18/quality/ci-proof.md`.

**Proof for review:** The required commands run from a clean install; a deliberately broken assertion/migration makes the relevant check fail.

**Known trap:** Do not make every student add a live root workflow. Practise in your folder; only the assigned task owner promotes the reviewed shared change.

## Two-hour problem-solving block (`P18.1`)

**Focus:** Bounded retries for a read exercise.

Write a pure decision function for a maximum of three read attempts; test the bound without adding automatic application write retries.

**Evidence path:** `students/<student-id>/week-18/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/api/src/app.ts, shared/api/test/, shared/web/src/App.tsx and .github/workflows/checks.yml`. Record scope, non-author review and actual proof in the [Week 18 contribution log](../shared/delivery/rotations/week-18.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 19](week-19.md).
