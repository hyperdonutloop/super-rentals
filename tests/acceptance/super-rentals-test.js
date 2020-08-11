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
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    // checking that h2 has the text
    assert.dom('h2').hasText('Welcome to Super Rentals');
    // the rest is pretty self explanatory
    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');

  });

  test('visiting /about', async function(assert) {
    await visit('/about');
    
    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    assert.dom('h2').hasText('About Super Rentals');
  
    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');
  
    assert.equal(currentURL(), '/getting-in-touch');
    
  })

  test('visiting /getting-in-touch', async function(assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals')
    assert.dom('h2').hasText('Contact Us');

    assert.dom('a.button').hasText('About');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  })

  test('navigating using the nav bar', async function(assert) {
    await visit('/')

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('SuperRentals');
    assert.dom('nav a.menu-about').hasText('About');
    assert.dom('nav a.menu-contact').hasText('Contact');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.equal(currentURL(), '/getting-in-touch');
    assert.equal(currentURL(), '/');
  });
});

