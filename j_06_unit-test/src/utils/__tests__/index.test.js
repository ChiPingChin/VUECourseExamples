
import { add, addBetter } from '..';

describe('utils', () => {
  test('add', () => {
    expect(add(1, 1)).toBe(2);
    expect(add(2, 2)).toBe(4);

    // JS float issue https://github.com/camsong/blog/issues/9
    // expect(add(0.1, 0.2)).toBe(0.3);
  });

  test('addBetter', () => {
    expect(addBetter(1, 1)).toBe(2);
    expect(addBetter(2, 2)).toBe(4);

    expect(addBetter(0.1, 0.2)).toBe(0.3);
  });
});
