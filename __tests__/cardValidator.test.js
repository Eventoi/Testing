import { validateCardNumber } from '../src/cardValidator';

test('valid Visa card', () => {
  expect(validateCardNumber('4111111111111111')).toBe(true);
});

test('invalid card', () => {
  expect(validateCardNumber('1234567890123456')).toBe(false);
});
