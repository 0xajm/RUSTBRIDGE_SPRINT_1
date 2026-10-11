# Evidence and review

Assess behavior, reasoning, safety, tests and reviewability together. A design names a choice, a reason and one alternative; a code task shows what fails when its implementation is wrong.

All students complete the 60 core project tasks and 20 common problem-solving blocks. Each core task has required proof and known traps in its week file. Individual practice is assessed separately from assigned shared contribution, so owning one product module does not establish the other skills.

## Milestone evidence

| Week | Milestone               | Minimum non-author proof                                                                |
| ---- | ----------------------- | --------------------------------------------------------------------------------------- |
| 1    | Agreed client brief     | Explain the user, safe event summary, context and authored PR                           |
| 7    | First local event flow  | Simulator request, accepted/listed/detail event, invalid request and memory-reset limit |
| 8    | Durable event flow      | Fresh/repeated migration, parameterized write and close/rebuild persistence             |
| 12   | Protected merchant flow | Login, expiry/logout, own records, forged-owner rejection and two-merchant isolation    |
| 17   | Browser integration     | Login/refresh/logout, filtered/paged/detail views and stale-result isolation            |
| 20   | Independent handover    | Clean start, tests, bounded extension, short demo, case study and oral/no-AI evidence   |

Week 15 rehearses the API-only clean start before React is built. Browser proof is pending at that point, not fabricated. The final Week 20 witness runs the complete flow.

## Weekly evidence

For a core task PR include ID, path, commands/results, one failure case, a reasoned choice and non-author review. Include the week's problem-solving evidence, boundary tests and one corrected attempt. For shared PRs include scope, migration/API impact and the contribution log. A maintainer may review or witness when a peer is unavailable.

Keep credentials out of output. Assess individual core work separately from rotating shared ownership; an absent contributor's task can be reassigned without withholding someone else's completed practice.

Starter checks establish the supplied environment, not completed merchant behavior. Real student migration/ownership checks must be present in the database suite; root discovery includes authored fast/DB tests.

## Individual extension

Week 19 requires one reviewed [bounded extension](15-individual-extension.md) after the core works. Preserve core endpoints, tests and merchant isolation. Record your own implementation and distinguish inherited shared modules and supplied helpers. Different extensions or design/test choices provide individual evidence; nobody follows a different core syllabus.

The shared app does not need every extension. Public claims must reflect actual author contributions, not ownership of the whole cohort product.

## Oral and no-AI checkpoints

Weeks 14 and 20 include a witnessed 30-minute repair of a small reversible defect in the learner's own code or disposable exercise. Documentation is allowed; AI and copied solutions are not. Record a failing assertion, reasoned change, passing proof and explain-back. An incomplete attempt is recorded honestly and followed by a focused retry, not a public grade.

In the final oral review, explain one request through validation/authentication/ownership to SQL and response, one concurrent duplicate case and one limitation. The observer should ask about code the learner actually authored.

## Final portfolio

Each student supplies:

- An independently reproducible local application and runbook with actual install/configuration/migrate/seed/start/test/shutdown commands.
- Architecture matching code, API documentation and design decisions.
- Passing authored tests visible in the real PR's CI, with migration/ownership proofs distinguished from starter tests.
- A demo video under three minutes linked from demo.md, using synthetic data and no credentials.
- One case study on a hard problem, attributable core/shared/extension commits and two defensible resume statements.
- One improvement/limitation and completed oral/no-AI technical observations.

A local recorded demo is sufficient; public hosting and paid accounts are not required. Do not claim production deployment, Rust expertise or blockchain engineering from Sprint 1.

## Review questions

- What input crosses a trust boundary, and which checks run at runtime?
- Which guarantee comes from PostgreSQL rather than an in-memory lookup?
- How does the query resolve ownership from the current verified operator?
- What happens when an old browser request completes after logout?
- Does the OpenAPI match the real implemented response and cookie/Origin rules?
- Can a peer reproduce the failure/fix and identify what you authored?

Grades, answer guidance and personal support records stay outside this public repository.
