import './assets/images/style.css';
import { validateCardNumber } from './cardValidator';
import { getPaymentSystem } from './paymentSystem';

const input = document.getElementById('card-input');
const result = document.getElementById('result');
const button = document.getElementById('validate-btn');

button.addEventListener('click', () => {
  const number = input.value;
  const isValid = validateCardNumber(number);
  const system = getPaymentSystem(number);

  result.textContent = isValid
    ? `✅ Valid card (${system.toUpperCase()})`
    : '❌ Invalid card number';
});
