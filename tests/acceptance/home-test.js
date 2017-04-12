import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  visit('/home');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});
