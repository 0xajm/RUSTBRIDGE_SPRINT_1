import assert from 'node:assert/strict';

function rows(text) {
  return text
    .split(/\r?\n/)
    .filter((line) => line.startsWith('|'))
    .map((line) =>
      line
        .split('|')
        .slice(1, -1)
        .map((cell) => cell.trim()),
    );
}

const code = (value) => '`' + value + '`';

export function verifyCurriculumReferences(data, read) {
  const index = rows(read('docs/05-task-index.md'));
  const tasks = index.filter((row) => /^`[TBDCE]\d{2}\.\d+`$/.test(row[1]));
  const problems = index.filter((row) => /^`P\d{2}\.1`$/.test(row[1]));
  const shared = rows(read('docs/08-shared-build-plan.md')).filter((row) =>
    /^\[\d+\]\(/.test(row[0]),
  );
  assert.equal(tasks.length, data.weeks.flatMap((week) => week.tasks).length);
  assert.equal(problems.length, data.weeks.length);
  assert.equal(shared.length, data.weeks.length);
  let taskIndex = 0;

  for (const week of data.weeks) {
    const number = String(week.number).padStart(2, '0');
    const link = '[' + week.number + '](../weeks/week-' + number + '.md)';
    const canonical = read('weeks/week-' + number + '.md');
    assert.equal(
      canonical.split(/\r?\n/)[0],
      '# Week ' + week.number + ': ' + week.title,
      'Wrong canonical week heading: ' + number,
    );
    assert.ok(
      canonical.includes(week.before),
      'Wrong prerequisites: ' + number,
    );
    assert.deepEqual(
      problems[week.number - 1],
      [link, code(week.problemSolving.id), week.problemSolving.focus],
      'Wrong problem-solving index: ' + number,
    );
    assert.deepEqual(
      shared[week.number - 1],
      [
        link,
        code(week.shared),
        week.outcome +
          (week.milestone ? ' Milestone: ' + week.milestone + '.' : ''),
      ],
      'Wrong shared build plan: ' + number,
    );
    const contribution = read(
      'shared/delivery/rotations/week-' + number + '.md',
    );
    assert.equal(
      contribution.split(/\r?\n/)[0],
      '# Week ' + week.number + ': weekly contribution record',
      'Wrong contribution week heading: ' + number,
    );
    assert.ok(contribution.includes('- Shared contribution: ' + week.shared));
    assert.ok(
      contribution.includes(
        '- Task IDs: ' + week.tasks.map((task) => task.id).join(', '),
      ),
    );

    for (const task of week.tasks) {
      assert.deepEqual(
        tasks[taskIndex++],
        [
          link,
          code(task.id),
          data.tracks[task.id[0]],
          task.title,
          code('students/<student-id>/' + task.path),
        ],
        'Wrong task index entry: ' + task.id,
      );
      for (const match of (task.path + ' ' + task.instructions).matchAll(
        /\bweek-(\d{2})\//g,
      ))
        assert.ok(
          Number(match[1]) <= week.number,
          task.id + ' requires a future-week artifact: ' + match[0],
        );
    }

    for (const student of data.students) {
      const pointer = read(
        'students/' + student + '/week-' + number + '/problem_statement.md',
      );
      assert.equal(
        pointer.split(/\r?\n/)[0],
        '# ' + student + ': Week ' + week.number,
        'Wrong student week heading: ' + student + ':' + number,
      );
      assert.ok(
        pointer.includes(
          'Your core task IDs are ' +
            week.tasks.map((task) => code(task.id)).join(', ') +
            '.',
        ),
        'Wrong student task order: ' + student + ':' + number,
      );
      assert.ok(
        read('students/' + student + '/README.md').includes(
          '- [Week ' +
            week.number +
            '](week-' +
            number +
            '/problem_statement.md): ' +
            week.title,
        ),
        'Wrong student week index: ' + student + ':' + number,
      );
    }
  }

  const taskWeek = (id) =>
    data.weeks.find((week) => week.tasks.some((task) => task.id === id)).number;
  const environment = read('.env.example');
  for (const [id, description] of [
    ['B05.2', 'random 32 byte key as 64 hex characters.'],
    [
      'B05.1',
      'generated synthetic operator passwords used only by local seed tooling.',
    ],
  ])
    assert.ok(
      environment.includes('# Week ' + taskWeek(id) + ': ' + description),
      'Wrong environment setup week: ' + id,
    );
}
