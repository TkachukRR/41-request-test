import { sendingRequests } from './scripts/requests.js';

const btnStart = document.getElementById('buttonStart');
const inputLimit = document.getElementById('concurrencyLimit');

btnStart.addEventListener('click', () => {
  const concurrencyLimit = parseInt(inputLimit.value);

  inputLimit.setAttribute('disabled', true);
  sendingRequests(concurrencyLimit);
});
