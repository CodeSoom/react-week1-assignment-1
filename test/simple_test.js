Feature('Click me');

Scenario('Click me test', (I) => {
  I.amOnPage('/');
  I.see('Click me!');

  I.click('Click me!');
  I.see('(1)');

  for (let i = 0; i < 4; i += 1) {
    I.click('Click me!');
  }
  I.see('(5)');

  I.click('2');
  I.see('(2)');

  I.click('30');
  I.see('(30)');

  for (let i = 0; i < 2; i += 1) {
    I.click('Click me!');
  }
  I.see('(32)');

  I.click('60');
  I.see('(60)');

  for (let i = 0; i < 5; i += 1) {
    I.click('Click me!');
  }
  I.see('(65)');

  I.click('100');
  I.see('(100)');

  I.click('Click me!');
  I.see('(101)');
});
