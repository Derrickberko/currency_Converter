function calculate(){
  //use jquery to the values
  let fromCurrency = $("#fromCurrency").val()
  let toCurrency = $('#toCurrency').val();
let amount = $("#amount").val()

//initialing my api
const apiKey = 'fca_live_qc1JS9KKJJ6VMjiQ5koHTTBc5pJWiXiVfv5c6X1x';
const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${toCurrency}&base_currency=${fromCurrency}`;

// Using axios to get the the information from the api
 axios.get(url).then(response => {
  console.log(response.data)

  //initiating exchangeRate and storing the response data
   let exchangeRate = response.data.data[toCurrency];
   let convertedAmount = (amount * exchangeRate).toFixed(2);

   //stored the result 
  let result = $(`#result`);
  const symbol = getSymbol(toCurrency);
   
  //displayng the results
   result.html(`The converted currency from ${fromCurrency} to ${toCurrency} is: ... ${symbol}${convertedAmount} 
   <img src="img/money_money.webp" alt="money" >`);
   
   //clear the amount after is being converted 
    $("#amount").val('');
  
})
   

}


//Created a funtion to store the symbols of the currencies
function getSymbol(currencyCode) {
    const symbols = {
        'USD': '$',
        'AUD': 'A$',
        'BGN': 'лв',
        'BRL': 'R$',
        'CAD': 'C$',
        'CHF': 'CHF',
        'CNY': '¥',
        'CZK': 'Kč',
        'DKK': 'kr',
        'EUR': '€',
        'GBP': '£',
        'HKD': 'HK$',
        'HRK': 'kn',
        'HUF': 'Ft',
        'IDR': 'Rp',
        'ILS': '₪',
        'INR': '₹',
        'ISK': 'kr',
        'KRW': '₩',
        'JPY': '¥',
        'MXN': '$',
        'MYR': 'RM',
        'NOK': 'kr',
        'NZD': 'NZ$',
        'PHP': '₱',
        'PLN': 'zł',
        'RON': 'lei',
        'RUB': '₽',
        'SEK': 'kr',
        'SGD': 'S$',
        'THB': '฿',
        'TRY': '₺',
        'ZAR': 'R'
    };
    return symbols[currencyCode] || ''; // Return the symbol if it exists, otherwise return an empty string
}