import { test } from '../lib';

const setup = () => {
  const container = document.createElement('div');
  container.id = 'container';

  container.innerHTML = '<p>Dom elements here</p>';

  document.body.appendChild(container);
};

beforeAll(() => setup());

describe('test name', () => {
  test('test description', () => {
    const container = document.getElementById('container');

    expect(container).toBeDefined();
    expect(test).toBe('First+Third');
  });
});
