export function validateCardNumber(number) {
  const digits = number.replace(/\D/g, '').split('').reverse().map(Number);
  const checksum = digits.reduce((sum, digit, index) => {
    if (index % 2 === 1) {
      let double = digit * 2;
      if (double > 9) double -= 9;
      return sum + double;
    }
    return sum + digit;
  }, 0);
  return checksum % 10 === 0;
}
