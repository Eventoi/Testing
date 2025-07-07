export function getPaymentSystem(number) {
  const clean = number.replace(/\D/g, '');
  if (/^4/.test(clean)) return 'visa';
  if (/^5[1-5]/.test(clean) || /^2(2[2-9]|[3-6][0-9]|7[01]|720)/.test(clean)) return 'mastercard';
  if (/^3[47]/.test(clean)) return 'amex';
  if (/^6(011|5|4[4-9])/.test(clean)) return 'discover';
  if (/^220[0-4]/.test(clean)) return 'mir';
  return 'unknown';
}
