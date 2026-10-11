import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { studentApiRelativePath } from '../student-context.mjs';

const read = (file) =>
  JSON.parse(readFileSync(new URL('../../' + file, import.meta.url), 'utf8'));
const curriculum = read('curriculum.json');

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
