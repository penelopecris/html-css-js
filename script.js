// Defina as taxas de câmbio
const exchangeRates = {
  USD: 1.22, // 1 dólar americano = 1.22 reais brasileiros
  EUR: 1.08, // 1 euro = 1.08 reais brasileiros
  BRL: 0.82 // 1 real brasileiro = 0.82 dólares americanos
  // Adicione mais taxas conforme necessário
};

// Função para converter a moeda
function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  if (isNaN(amount)) {
    document.getElementById('result').innerText = 'Por favor, insira um valor numérico.';
    return;
  }

  const convertedAmount = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);
  const formattedResult = `${convertedAmount.toFixed(2)} ${toCurrency}`;
  document.getElementById('result').innerText = formattedResult;
}
