const convertButton = document.querySelector(".convertButton");
let currencySelect = document.querySelector(".currency-select");
let currencySelectToConvert = document.querySelector(".currency-select-to-convert"); // moeda a ser convertida 

function convertValues() {
  let inputCurrencyValue = document.querySelector(".inputCurrency").value; // pego o valor que será convertido
  let currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // pego o p que mostrara o valor antes de convertido
  let currencyValueConverted = document.querySelector(".currency-value"); // pego o p que mostrará o valor depois de covertido

  if (currencySelectToConvert.value == "real") {
    
    var realToday = 1;
    var dolarToday = 4.75;
    var euroToday = 5.25;
    var libraToday = 6.13;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);

    convert()
  }

  if (currencySelectToConvert.value == "dolar") {
    
    var dolarToday = 1;
    var realToday = 0.21;
    var euroToday = 1.11;
    var libraToday = 1.29;


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);

    convert()
  }

  if (currencySelectToConvert.value == "euro") {

    var euroToday = 1;
    var realToday = 0.19;
    var dolarToday = 0.90;
    var libraToday = 1.17;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue)

    convert()
  }
  if (currencySelectToConvert.value == "libra") {
    
    var libraToday = 1;
    var realToday = 0.16;
    var dolarToday =  0.77;
    var euroToday = 0.86;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue)

    convert()
  }

  function convert() {


    if (currencySelect.value == "dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputCurrencyValue / dolarToday);
    }
    if (currencySelect.value == "euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputCurrencyValue / euroToday);
    }
    if (currencySelect.value == "libra") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(inputCurrencyValue / libraToday);
    }
    if (currencySelect.value == "real") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(inputCurrencyValue/ realToday);
    }
  }


}

function changeCurrency() {
    const flagIconConvertedValue = document.querySelector(".flag-icon-converted");
    const currencyConvertedText = document.querySelector(".currency-name-converted");

    if(currencySelect.value == "real") {
      flagIconConvertedValue.src = "assets/img/brasil-icon.png";
      currencyConvertedText.innerHTML = "Real";
    }
    if(currencySelect.value == "dolar") {
      flagIconConvertedValue.src = "assets/img/usa-icon.png";
      currencyConvertedText.innerHTML = "Dólar Americano";
    }
    if(currencySelect.value == "euro") {
      flagIconConvertedValue.src = "assets/img/euro-icon.png";
      currencyConvertedText.innerHTML = "Euro";
    }
    if(currencySelect.value == "libra") {
      flagIconConvertedValue.src = "assets/img/libra-icon.png";
      currencyConvertedText.innerHTML = "Libra"
    }

    convertValues()
}

function changeCurrencyToConvert() {
  const flagIconToConvert = document.querySelector(".flag-icon-to-convert");
  const currencyToConvertText = document.querySelector(".currency-name-to-convert")

  if(currencySelectToConvert.value == "real") {
    flagIconToConvert.src = "assets/img/brasil-icon.png"
    currencyToConvertText.innerHTML = "Real"
  }
  if(currencySelectToConvert.value == "dolar") {
    flagIconToConvert.src = "assets/img/usa-icon.png";
    currencyToConvertText.innerHTML = "Dólar Americano";
  }
  if(currencySelectToConvert.value == "euro") {
    flagIconToConvert.src = "assets/img/euro-icon.png";
    currencyToConvertText.innerHTML = "Euro";
  }
  if(currencySelectToConvert.value == "libra") {
    flagIconToConvert.src = "assets/img/libra-icon.png";
    currencyToConvertText.innerHTML = "Libra"
  }

  convertValues()
}

currencySelectToConvert.addEventListener("change", changeCurrencyToConvert);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
