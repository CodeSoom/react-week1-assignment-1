Feature('Click me');

Scenario('Click me test', (I) => {
  I.amOnPage('http://127.0.0.1:9000');

  I.see('Click me!');

  I.click('Click me!');
  I.see('(1)');

  I.click('Click me!');
  I.click('Click me!');
  I.click('Click me!');
  I.click('Click me!');
  I.see('(5)');

  I.click('2');
  I.see('(2)');
});
