const kztValue = document.getElementById('kzt-value');
const usdValue = document.getElementById('usd-value');
const eurValue = document.getElementById('eur-value');

function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const currency = document.getElementById('currency').value;
  
  switch (currency) {
    case 'KZT':
      kztValue.textContent = amount;
      usdValue.textContent = (amount / 429).toFixed(2);
      eurValue.textContent = (amount / 507).toFixed(2);
      break;
    case 'USD':
      kztValue.textContent = (amount * 431).toFixed(2);
      usdValue.textContent = amount;
      eurValue.textContent = (amount * 0.93).toFixed(2);
      break;
    case 'EURO':
      kztValue.textContent = (amount * 509).toFixed(2);
      usdValue.textContent = (amount * 1.08).toFixed(2);
      eurValue.textContent = amount;
      break;
    }
}