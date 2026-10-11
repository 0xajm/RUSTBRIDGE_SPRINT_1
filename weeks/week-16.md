# Week 16: Build a small merchant interface while tightening responses

MerchantDesk | Sprint 1 | C: Client Integration + B: Backend Development

## The project need

A merchant needs to inspect event data without typing curl commands; backend responses must stay safe.

## Before you start

Use fixtures/web-starter/ as the individual UI scaffold, following docs/03-student-guide.md. React tasks begin with static synthetic data, while backend response work continues.

## Keep the application connected

Use the Week 6 API factory and keep all numbered migrations in the Week 8 migration directory. Continue the Week 16 React client; do not start another client or move authorization into the browser. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

Typed UI components and bounded safe API responses.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                 | Planned task minutes |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `C03.1` | JSX, typed props, lists, keys and minimal semantic markup. [React quick start](https://react.dev/learn)                                                                                                              |                  100 |
| `C03.2` | useState, event handlers, forms and labels. [React state](https://react.dev/learn/state-a-components-memory)                                                                                                         |                   90 |
| `B07.1` | Response DTOs, JSON Schema and privacy boundaries. [Fastify validation](https://fastify.dev/docs/v5.7.x/Reference/Validation-and-Serialization/), [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/) |                  110 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Render a typed event list (`C03.1`)

- [ ] Copy the supplied web scaffold into your own week-16/client once. Add an EventList component with typed props and stable event IDs as keys. Show event kind, currency, integer-derived display amount and timestamp. Use a heading and a table or accessible list.

**Primary path:** `students/<student-id>/week-16/client/src/EventList.tsx`.

**Proof for review:** The local UI renders two events and a meaningful empty state; a peer can explain where props come from.

**Known trap:** React renders the interface. HTTP fetch, not React itself, transports API requests.

### 2. Add a small controlled filter (`C03.2`)

- [ ] Add a labelled kind selector and a submit/reset interaction on the static data. Keep data in the parent and explain a prop/state distinction. Use the supplied modest CSS; do not add a design system, router or global state package.

**Primary path:** `students/<student-id>/week-16/client/src/App.tsx`.

**Proof for review:** Filter/reset work and keyboard users can operate the control. No button uses a fake network success message.

**Known trap:** Do not turn this into a frontend styling project.

### 3. Shape and test safe API responses (`B07.1`)

- [ ] Return only public event fields and the paging envelope. Add response schemas and tests proving operator password hashes, cookie values and internal SQL errors are absent. Compare the response shape with the UI props; use an explicit mapping instead of pretending DB rows are already browser models.

**Primary path:** `students/<student-id>/week-16/api/response-contract.test.ts`.

**Proof for review:** The JSON shape is documented and negative tests prove private fields are excluded.

**Known trap:** A response TypeScript type does not strip private properties at runtime.

## Two-hour problem-solving block (`P16.1`)

**Focus:** Transformations and pure functions.

Project event records to public fields without mutating inputs; test that a private field is absent.

**Evidence path:** `students/<student-id>/week-16/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/web/src/App.tsx, shared/web/src/EventList.tsx and shared/api/src/routes/events.ts`. Record scope, non-author review and actual proof in the [Week 16 contribution log](../shared/delivery/rotations/week-16.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 17](week-17.md).
