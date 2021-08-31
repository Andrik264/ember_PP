import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | user-page/todos', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:user-page/todos');
    assert.ok(route);
  });
});
