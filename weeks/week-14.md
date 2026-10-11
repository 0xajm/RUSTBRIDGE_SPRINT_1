# Week 14: Review the protected contract and repair a boundary

MerchantDesk | Sprint 1 | B: Backend Development + E: Engineering and Delivery

## The project need

The authenticated API needs a contract that exposes its trust boundaries and tests that survive adversarial requests.

## Before you start

Bring two seeded merchants, the ownership suite and Week 10 OpenAPI. Keep all tests local and disposable; no new authentication mechanism or security vendor is required.

## Keep the application connected

Use the Week 6 API factory and keep all numbered migrations in the Week 8 migration directory. See the [application wiring guide](../docs/12-application-wiring.md) for commands and module connections.

## Outcome

A current authenticated API specification, a negative-request matrix and an explained no-AI repair.

## Learn and use

| Task    | Concepts and reading                                                                                                                                                                                                                                                                               | Planned task minutes |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `B10.1` | Cookie security schemes, Origin requirements and non-leaking authorization responses. [OpenAPI 3.1 specification](https://spec.openapis.org/oas/v3.1.1.html), [Document the continuing API](../docs/13-api-documentation.md), [MerchantDesk API contract](../docs/04-api-and-security-contract.md) |                  100 |
| `B10.2` | Trust-boundary tests, malformed JSON, rejected ownership and durable state. [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/), [Node 22 test runner](https://nodejs.org/docs/latest-v22.x/api/test.html), [MerchantDesk API contract](../docs/04-api-and-security-contract.md)    |                  100 |
| `E13.1` | Independent debugging, minimal changes and oral explain-back. [Assessment and review](../docs/10-assessment.md), [AI use and explanation checkpoints](../docs/07-resources.md)                                                                                                                     |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

## Core tasks

### 1. Update OpenAPI for authentication and ownership (`B10.1`)

- [ ] Continue the Week 10 specification rather than copying another version into the app. Keep week-10/api/openapi.json canonical and record this review at the task path. Add login/logout/me, cookie authentication, exact Origin on writes, generic 401, owned 404 and safe public response schemas. Record readiness as planned until Week 18. Compare it with two real merchant flows.

**Primary path:** `students/<student-id>/week-14/design/openapi-review.md`.

**Proof for review:** A peer signs in and reads owned events using the updated spec, while anonymous/other-owner cases match the documented responses. Logout is a bodyless 204 after a JSON {} request.

**Known trap:** An Origin header is not service authentication, and an HttpOnly cookie is not a claim that authorization is automatic.

### 2. Prove rejected requests do not change stored data (`B10.2`)

- [ ] Build a small negative-request table covering malformed JSON, wrong body types, unexpected merchant_id, missing/bad cookies and missing/foreign Origin. Include at least one body-limit case and one invalid query case. Assert the deliberate safe response and that no event was inserted or overwritten. Use an isolated real DB schema and close its apps/pools.

**Primary path:** `students/<student-id>/week-14/api/security.db.test.ts`.

**Proof for review:** At least six distinct rejection cases leave the original row count/content unchanged; a valid authenticated control request still succeeds. Existing core tests remain green.

**Known trap:** A rejection status alone does not establish that a write was never committed; inspect the isolated database too.

### 3. Repair and explain a small defect without AI (`E13.1`)

- [ ] In a 30-minute supervised or witnessed checkpoint, inspect a small reversible defect in your own validator, query boundary or HTTP mapping without AI or copied solutions. Documentation is allowed. Write a failing assertion, repair the cause and explain input, trust boundary and outcome. If incomplete, record it honestly and schedule a focused retry; do not publish private grading.

**Primary path:** `students/<student-id>/week-14/review/checkpoint.md`.

**Proof for review:** A non-author records the observed failing/passing commands and your explanation. The final code satisfies the unchanged core contract.

**Known trap:** The checkpoint tests understanding, not memorised syntax, speed rankings or willingness to bypass a check.

## Two-hour problem-solving block (`P14.1`)

**Focus:** Binary search and prerequisites.

Find a target in a sorted integer list with binary search; test missing/boundary targets and explain the sorted-input requirement.

**Evidence path:** `students/<student-id>/week-14/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

## Shared contribution

Assigned task owners contribute reviewed work to `shared/api/openapi.json, shared/api/test/security.db.test.ts and shared/delivery/security-review.md`. Record scope, non-author review and actual proof in the [Week 14 contribution log](../shared/delivery/rotations/week-14.md). Everyone completes the same core practice; no fixed pair is a prerequisite.

## Completion checklist

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained

Next: [Week 15](week-15.md).
