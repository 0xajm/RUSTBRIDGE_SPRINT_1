# Week 3: Work with collections and reusable modules

MerchantDesk | Sprint 1 | T: TypeScript and JavaScript + E: Engineering and Delivery

## The project need

The merchant needs useful summaries over several records without changing the original event data.

## Before you start

Use the supplied events.json bodies and the Week 2 pure function. SQL begins in Week 4; do not install another runtime or testing framework.

## Outcome

Correct collection summaries, reusable imports and honest malformed-input failures.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                                           | Planned task minutes |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `T02.2` | Arrays, iteration, filter/map, accumulator state and empty inputs. [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)               |                  100 |
| `T02.3` | Objects, Map, duplicate keys, strings and simple time/space reasoning. [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) |                  100 |
| `E02.2` | Imports/exports, JSON parsing, runtime input and useful errors. [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html), [Node 22 test runner](https://nodejs.org/docs/latest-v22.x/api/test.html)                              |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Summarise events using loops and collection methods (`T02.2`)

- [ ] Load or import the synthetic event fixture, then implement captured-event selection and event-kind counts. Compare a loop with filter/map on the same data. Test empty and single-item lists as well as the complete fixture. Keep the original list unchanged; do not assume all events represent captured money.

**Primary path:** `students/<student-id>/week-03/typescript/collections.ts`.

**Proof for review:** Both implementations agree with fixture expectations, including empty input. Tests catch a wrong count and unintended input mutation.

**Known trap:** Counting records is not a financial balance; failed payments and refunds must not be silently added to a captured total.

### 2. Create a safe keyed lookup and explain its limits (`T02.3`)

- [ ] Build an in-memory lookup by provider_event_id for this one-source fixture. Use a Map and report duplicate fixture identities rather than silently overwriting them. Test missing and duplicate IDs. Compare a linear scan with a keyed lookup in plain language; the database-backed merchant identity comes later.

**Primary path:** `students/<student-id>/week-03/typescript/event-lookup.ts`.

**Proof for review:** A known ID is found, a missing ID is deliberate, and a duplicate fixture is reported without losing the original. Explain the extra memory used by the lookup.

**Known trap:** This practice lookup is not concurrent deduplication, authorization or a substitute for PostgreSQL uniqueness.

### 3. Separate modules and preserve parsing failures (`E02.2`)

- [ ] Move the summary/lookup helpers into exported modules and import them from one small fixture reader. Use .js specifiers in Node-oriented imports. Test malformed JSON and a non-array body in read-events.test.ts; do not treat either as an empty successful list. Record run, test and typecheck commands.

**Primary path:** `students/<student-id>/week-03/typescript/read-events.ts`.

**Proof for review:** A clean run reuses the modules, while malformed and wrong-shaped input fail deliberately. The tests import functions without automatically running a file-reading CLI.

**Known trap:** A TypeScript annotation on parsed JSON does not prove the runtime shape is correct.

## Two-hour problem-solving block (`P03.1`)

**Focus:** Arrays and immutable summaries.

Count event kinds without changing the input array; test empty input and all three supported kinds.

**Evidence path:** `students/<student-id>/week-03/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/simulator/event-summary.ts and shared/simulator/test/`. Record scope, non-author review and actual proof in the [Week 3 contribution log](../shared/delivery/rotations/week-03.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 4](week-04.md).
