import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange.js';

function clearResults () {
    $('#userInput').val("");
    $('#euro').text("");
    $('#yen').text("");
    $('#rupee').text("");
    $('#peso').text("");
    $('#ruble').text("");
    $('#error').text("");
    $('#typeErr1').text("");
    $('#typeErr2').text("");
}

function grabResults(response) {
  if (response.result === 'success') {
    $('#euro').text(`The conversion for USD is ${response.conversion_rates.EUR} EUR`);
    $('#yen').text(`The conversion for USD is ${response.conversion_rates.JPY} JPY`);
    $('#rupee').text(`The conversion for USD is ${response.conversion_rates.INR} INR`);
    $('#peso').text(`The conversion for USD is ${response.conversion_rates.MXN} MXN`);
    $('#ruble').text(`The conversion for USD is ${response.conversion_rates.RUB} RUB`);
  } else {
    $('#error').text(`(<error>) ${response} (<error>)`);
    // $('#typeErr1').text(`Error 404 Not Found: "This means you have entered an invalid input."`);
    // $('#typeErr2').text(`Error 401 Unauthorized: "This means your API Key is invalid."`);
  }
}

async function apiCall(exchange) {
  const response = await Exchange.moneyConverter(exchange);
  grabResults(response);
}

$(document).ready(function() {
  $('#button').on('click', function() {
    let money = $('#usd').val();
    // const input = parseInt(money);
    let exchange = $('#selector').val();
    // clearResults();
    apiCall(exchange);
  });
});