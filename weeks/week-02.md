# Week 2: Make values, decisions and functions explainable

MerchantDesk | Sprint 1 | T: TypeScript and JavaScript + E: Engineering and Delivery

## The project need

A merchant event summary needs predictable decisions, not copied code that only works for one example.

## Before you start

Continue the Week 1 inspector. Use TypeScript files to practise JavaScript behavior; no PostgreSQL, server or React is needed.

## Outcome

Small pure functions, deliberate branches and a reproduced debugging correction.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                                                                                | Planned task minutes |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `T01.2` | const/let, primitive values, strict equality, conditions and integer arithmetic. [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [TypeScript for new programmers](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch)          |                  100 |
| `T01.3` | Parameters, return values, scope, pure functions and assertions. [Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html), [Node 22 test runner](https://nodejs.org/docs/latest-v22.x/api/test.html)                                                              |                  100 |
| `E01.3` | Reading stack traces, minimal reproductions, feedback and repair. [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [GitHub reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests) |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Trace values and make explicit decisions (`T01.2`)

- [ ] Write small examples using one synthetic event. Distinguish a missing amount, zero, a numeric string and an integer. Use explicit branches to produce a summary or a stated input issue. Trace the values before running the program; keep integer paise separate from display formatting.

**Primary path:** `students/<student-id>/week-02/typescript/decisions.ts`.

**Proof for review:** Recorded predictions match the actual output for at least six cases, including missing, zero and wrong-type values. Explain one corrected prediction.

**Known trap:** Truthiness and loose equality can hide zero or turn bad input into apparently valid data.

### 2. Extract and test a pure summary function (`T01.3`)

- [ ] Extract a function from the inspector that takes an explicitly typed event and returns a summary without reading files or printing. Write summary.test.ts with assertions for at least three event kinds and an amount. Explain parameters, local variables and return values. Continue calling it from the inspector.

**Primary path:** `students/<student-id>/week-02/typescript/summary.ts`.

**Proof for review:** The same input produces the same summary, tests fail when a result is deliberately wrong, and running the function does not mutate the input.

**Known trap:** A console message or copied expected value without an assertion is not a test.

### 3. Investigate one small programming mistake (`E01.3`)

- [ ] Introduce a reversible mistake in your own exercise, such as a wrong branch or an undefined property. Record expected versus actual behavior, the relevant error or assertion and a small reproduction. Repair it and have a peer explain the cause. Keep the valid implementation and its regression test in the final commit.

**Primary path:** `students/<student-id>/week-02/review/debugging.md`.

**Proof for review:** The notes contain an actual failing observation, a reasoned repair and the passing command. No intentional broken code remains in the PR.

**Known trap:** Do not fix a failing test by deleting its assertion or hiding an error with a success return.

## Two-hour problem-solving block (`P02.1`)

**Focus:** Branching and small functions.

Write a function that counts a character in a string using a loop; handle empty input and explain every variable.

**Evidence path:** `students/<student-id>/week-02/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/simulator/summary.ts and shared/delivery/foundations.md`. Record scope, non-author review and actual proof in the [Week 2 contribution log](../shared/delivery/rotations/week-02.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 3](week-03.md).
