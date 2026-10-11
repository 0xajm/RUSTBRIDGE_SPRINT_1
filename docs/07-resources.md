# Learning resources

Each week's learning table links the documentation needed for its current tasks. Read the named concepts and try them immediately; an entire handbook is not required homework. Project-specific tasks link to the relevant local brief, contract or review guide.

## Core references

| Area          | Reference                                                                                                                                                                                                        | Scope                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Language      | [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch), [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)                                   | Values, objects, functions, types, modules and async behavior as introduced                |
| Backend       | [Fastify getting started](https://fastify.dev/docs/v5.7.x/Guides/Getting-Started/)                                                                                                                               | Route and app structure; task tables link validation, testing, session and logging details |
| Database      | [PostgreSQL tutorial](https://www.postgresql.org/docs/17/tutorial.html), [node-postgres queries](https://node-postgres.com/features/queries)                                                                     | SQL, constraints and parameterized queries; use task links for pooling and transactions    |
| Client        | [React quick start](https://react.dev/learn), [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)                                                                              | Components, state, forms and consuming the API; no design-system course                    |
| Collaboration | [Git basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository), [GitHub reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests) | Focused commits, branches, PRs and useful feedback                                         |

## Versions and dependencies

Use the supported Node 22.x and PostgreSQL 17 setup. Install project dependencies with `npm.cmd ci`; `package-lock.json` pins their versions. Do not independently upgrade frameworks or add another package manager. Task-specific documentation links identify the API being studied; verify differences against the installed version.

## AI-assisted learning

An assistant can explain an error or suggest a small experiment. Verify its suggestions against documentation and tests, keep secrets out of prompts and be able to explain your result. Do not submit unexplained generated code or fabricated evidence.

## Additional bounded references

- [API documentation guide](13-api-documentation.md): OpenAPI, synthetic request/response examples and implementation checks.
- [Common problem-solving guide](14-problem-solving.md): arrays, strings, maps, basic algorithms and explained tests.
- [Individual extension guide](15-individual-extension.md): one small feature with unchanged core guarantees.

## Explain-back and no-AI checkpoints

AI and videos may explain concepts, suggest experiments or help interpret an error during ordinary learning. Verify suggestions with documentation, tests and your own explanation. Do not send secrets, private student records or invented results to an assistant.

Weeks 14 and 20 contain a 30-minute no-AI repair with documentation allowed. A reviewer selects a small reversible defect in the learner's own disposable exercise or code, witnesses an assertion and repair, and asks for an explanation. The time box is a checkpoint, not automatic failure: record an incomplete attempt honestly and schedule a focused retry. Public evidence records commands/technical observations, never private grades or rankings.
