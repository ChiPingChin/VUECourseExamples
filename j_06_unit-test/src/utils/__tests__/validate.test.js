
import { isEmail, isMobileNumber } from '../validate';

describe('validate', () => {
  test('isEmail', () => {
    expect(isEmail('milkmidi@gmail.com')).toBeTruthy();
    expect(isEmail('milkmidi.test@gmail.com')).toBeTruthy();
    expect(isEmail('milkmidi+jp@gmail.com')).toBeTruthy();

    expect(isEmail('milkmidigmail.com')).toBeFalsy();
    expect(isEmail('milkmidigmail')).toBeFalsy();
    expect(isEmail()).toBeFalsy();
  });

  test('isMobileNumber', () => {
    expect(isMobileNumber('0912345678')).toBeTruthy();
    expect(isMobileNumber('0987654321')).toBeTruthy();
    expect(isMobileNumber('0945798438')).toBeTruthy();

    expect(isMobileNumber('987878777')).toBeFalsy();
    expect(isMobileNumber('milkmidi')).toBeFalsy();
    expect(isMobileNumber()).toBeFalsy();
  });
});
