import { getPaymentSystem } from '../src/paymentSystem';

test('Visa', () => {
  expect(getPaymentSystem('4111111111111111')).toBe('visa');
});

test('MasterCard', () => {
  expect(getPaymentSystem('5500000000000004')).toBe('mastercard');
});

test('AmEx', () => {
  expect(getPaymentSystem('340000000000009')).toBe('amex');
});

test('Discover', () => {
  expect(getPaymentSystem('6011000000000004')).toBe('discover');
});

test('Mir', () => {
  expect(getPaymentSystem('2200000000000053')).toBe('mir');
});
