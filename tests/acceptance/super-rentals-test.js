import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);
  // creating a test and describing it as 'visiting /'
  test('visiting /', async function(assert) {
    // telling the test to visit /
    await visit('/');
    // checking that the url matches
    assert.equal(currentURL(), '/');
    // checking that h2 has the text
    assert.dom('h2').hasText('Welcome to Super Rentals');
    // the rest is pretty self explanatory
    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');

  });  
});
