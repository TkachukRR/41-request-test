const btnStart = document.getElementById('buttonStart');
const inputLimit = document.getElementById('concurrencyLimit');

btnStart.addEventListener('click', () => {
  inputLimit.setAttribute('disabled', true);
});
