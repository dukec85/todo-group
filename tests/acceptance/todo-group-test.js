import { test } from 'qunit';
import moduleForAcceptance from 'todo-group/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group');

test('visiting /todo-group', function(assert) {
  visit('/todo-group');

  andThen(function() {
    assert.equal(currentURL(), '/todo-group');
  });
});

test('visiting /todo-group shows a list', function(assert) {
  server.createList('todo-group', 2);
  visit('/todo-group');

  andThen(function() {
    findWithAssert('.todo-list');
    assert.equal(findWithAssert('.todo-list__item').length, 2,
      'There should be an element for each group from the API');

      const firstGroupEl = findWithAssert('.group-name:first');
      const firstGroup = server.db.groups.find(2


    );
    assert.equal(firstGroupEl.text().trim(), `${firstGroup.firstName} ${firstGroup.lastName}`,
      'The first group should be filled in');

  });
});

// test('user can see a link to todo for each group in /groups', function (assert) {
//   server.createList('group', 3);
//   server.create('todo', {
//     groupId: 1,
//   });
//
//   visit('/groups');
//   click('.group-link[data-id=1]');
//
//   andThen(function() {
//     const firstGroupLink = findWithAssert('.group-link[data-id=1]');
//   });
// });
//
//
// test('user can delete an existing group', function(assert) {
//   server.createList('group', 4);
//   visit('/groups');
//   click('.delete[data-id=2]');
//
//   andThen(function() {
//     assert.equal(find('.group-list__item').length, 3, 'The deleted item should not show in the list');
//     assert.equal(server.db.authors.find(2), null, 'The deleted group should be removed from the API');
//   });
// });
//
//
// test('user can navigate to add new todo from main list', function(assert) {
//   visit('/todo-group');
//   click('.new-link');
//
//   andThen(function() {
//     assert.equal(currentURL(), '/todo-group/new');
//     assert.equal(findWithAssert('.page-title').text().trim(), 'New Todo');
//   });
// });
