# Week 1: Meet the merchant and make the first change

MerchantDesk | Sprint 1 | E: Engineering and Delivery + T: TypeScript and JavaScript

## The project need

The client needs one place to inspect sandbox payment events, but the request is not yet a specification.

## Before you start

No programming experience is assumed. Follow docs/02-windows-setup.md sections 1-3; do not install PostgreSQL or study React yet.

## Outcome

A reviewed brief, a safe event summary, and one authored pull request. Milestone: Agreed client brief.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                                                              | Planned task minutes |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `E01.1` | User stories, scope and a one-page context diagram. [MerchantDesk client brief](../docs/01-project-brief.md)                                                                                                                                                      |                  100 |
| `T01.1` | Values, variables, objects, console output and the TS/JS relationship. [TypeScript for new programmers](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch), [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)  |                  130 |
| `E01.2` | Diffs, branches, commits and pull requests. [Git book basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository), [GitHub reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests) |                   70 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Write the brief and context map (`E01.1`)

- [ ] Read the client story. Write the user, three useful actions, non-goals, five open questions and what a successful demo would show. Add a small Mermaid map of simulator, API, database and merchant interface. Keep implementation choices provisional.

**Primary path:** `students/<student-id>/week-01/discovery/brief.md`.

**Proof for review:** A peer can explain the same user and V1 boundary from your brief. The map labels the API as the data/security boundary.

**Known trap:** A list of technologies is not a client brief.

### 2. Run a safe event inspector (`T01.1`)

- [ ] After npm ci, use the fixture at fixtures/events.json. Begin with one object and print its event ID, kind and amount_minor. Add a function that returns that summary. Record the run command in NOTES.md next to the script. Do not print credentials or customer data.

**Primary path:** `students/<student-id>/week-01/typescript/inspector.ts`.

**Proof for review:** npm.cmd run practice -- students/BE01/week-01/typescript/inspector.ts runs after replacing BE01. Explain that tsx runs the code without typechecking; npm.cmd run typecheck is the separate compiler check.

**Known trap:** You do not need arrays, async, React or a database to finish this first program.

### 3. Complete the Git and review loop (`E01.2`)

- [ ] Use a task branch, inspect git diff, make focused task-ID commits and open one weekly PR. Review an assigned peer's change and record its link. Record real commit and PR links.

**Primary path:** `students/<student-id>/week-01/review.md`.

**Proof for review:** Your author identity is correct, changed files stay in your folder, and the review explains one choice.

**Known trap:** Run Git commands from the repository root, not your home directory.

## Two-hour problem-solving block (`P01.1`)

**Focus:** Trace values and a simple decision.

Given a synthetic amount and a boolean captured flag, return an explicit label without loose equality; explain the result for zero and a numeric string.

**Evidence path:** `students/<student-id>/week-01/problem-solving/README.md`.

**Proof:** Include a runnable decision function, an expected/actual case table, one corrected prediction and a plain-language explanation. Automated test files begin in Week 2; no algorithm knowledge is assumed.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/delivery/brief.md and shared/delivery/context.md`. Record scope, non-author review and actual proof in the [Week 1 contribution log](../shared/delivery/rotations/week-01.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 2](week-02.md).
