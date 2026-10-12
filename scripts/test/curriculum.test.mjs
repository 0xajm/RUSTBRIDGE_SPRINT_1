import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { studentApiRelativePath } from '../student-context.mjs';
import { verifyCurriculumReferences } from '../curriculum-references.mjs';

const read = (file) =>
  JSON.parse(readFileSync(new URL('../../' + file, import.meta.url), 'utf8'));
const curriculum = read('curriculum.json');
const readText = (file) =>
  readFileSync(new URL('../../' + file, import.meta.url), 'utf8');

test('week headings, task indexes, all student pointers and environment timing agree', () => {
  verifyCurriculumReferences(curriculum, readText);
});

test('curriculum verification rejects stale week labels and task paths', () => {
  for (const [file, before, after] of [
    ['.env.example', '# Week 11:', '# Week 8:'],
    ['weeks/week-04.md', '# Week 4:', '# Week 2:'],
    ['shared/delivery/rotations/week-04.md', '# Week 4:', '# Week 2:'],
    [
      'students/BE10/week-04/problem_statement.md',
      '# BE10: Week 4',
      '# BE10: Week 2',
    ],
    ['students/BE10/README.md', '- [Week 4]', '- [Week 2]'],
    [
      'docs/05-task-index.md',
      'week-04/sql/first-queries.sql',
      'week-02/sql/first-queries.sql',
    ],
    [
      'docs/08-shared-build-plan.md',
      'shared/delivery/event-contract.md',
      'shared/delivery/old-contract.md',
    ],
  ]) {
    assert.ok(readText(file).includes(before));
    assert.throws(
      () =>
        verifyCurriculumReferences(curriculum, (path) =>
          path === file
            ? readText(path).replace(before, after)
            : readText(path),
        ),
      /Wrong /,
      'A stale reference was accepted: ' + file,
    );
  }
});

test('an earlier task cannot require a future-week artifact', () => {
  const changed = structuredClone(curriculum);
  changed.weeks[14].tasks.find((task) => task.id === 'E11.2').instructions =
    'Draft week-20/delivery/runbook.md now.';
  assert.throws(
    () => verifyCurriculumReferences(changed, readText),
    /future-week artifact/,
  );
});

test('Node typechecking includes shared simulator and database code', () => {
  const config = read('tsconfig.node.json');
  assert.ok(config.include.includes('shared/simulator/**/*.ts'));
  assert.ok(config.include.includes('shared/database/**/*.ts'));
});

test('twenty-week budgets include problem-solving without adding it on top', () => {
  assert.equal(curriculum.weeks.length, 20);
  assert.equal(curriculum.weeks.flatMap((week) => week.tasks).length, 60);
  for (const week of curriculum.weeks) {
    assert.equal(
      Object.values(week.budget).reduce((sum, minutes) => sum + minutes, 0),
      15 * 60,
    );
    assert.equal(week.budget.problemSolving, 2 * 60);
    assert.equal(
      week.tasks.reduce((sum, task) => sum + task.minutes, 0),
      week.budget.tasks,
    );
    const number = String(week.number).padStart(2, '0');
    assert.equal(week.problemSolving.id, 'P' + number + '.1');
  }
});

test('application roots match the continuing student runner and do not require future task files', () => {
  assert.equal(
    studentApiRelativePath('BE01'),
    'students/BE01/' + curriculum.application.apiRoot + '/server.ts',
  );
  assert.equal(
    curriculum.application.migrationRoot,
    'week-08/database/migrations',
  );
  assert.equal(curriculum.application.clientRoot, 'week-16/client');
  for (const week of curriculum.weeks) {
    for (const task of week.tasks) {
      const artifactWeek = Number(task.path.match(/^week-(\d{2})\//)?.[1]);
      assert.ok(
        artifactWeek <= week.number,
        task.id + ' has a future primary artifact',
      );
    }
  }
});

test('the supplied OpenAPI shell describes liveness, not completed merchant features', () => {
  const fixture = read('fixtures/openapi-starter.json');
  const shared = read('shared/api/openapi.json');
  assert.equal(fixture.openapi, '3.1.0');
  assert.deepEqual(Object.keys(fixture.paths), ['/health/live']);
  assert.ok(fixture.paths['/health/live'].get.responses['200']);
  assert.ok(shared.paths['/health/live'].get.responses['200']);
  // Shared documentation grows with student implementations; do not freeze it to the fixture.
});
