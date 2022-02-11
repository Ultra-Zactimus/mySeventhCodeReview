import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyExchange from './js/exchange.js';

function clearResults () {
    $('#userInput').val("");
    $('#euro').text("");
    $('#yen').text("");
    $('#rupee').text("");
    $('#peso').text("");
    $('#ruble').text("");
    $('#error').text("");
}

function getResults(response) {
  if (response.result === "success") {
    if (response.target_code === "EUR") {
      $('#euro').text(`The conversion is ${response.conversion_result} EUR`);
    } else if (response.target_code === "JPY") {
      $('#yen').text(`The conversion is ${response.conversion_result} JPY`);
    } else if (response.target_code === "INR") {
      $('#rupee').text(`The conversion is ${response.conversion_result} INR`);
    } else if (response.target_code === "MXN") {
      $('#peso').text(`The conversion is ${response.conversion_result} MXN`);
    } else if (response.target_code === "RUB") {
      $('#ruble').text(`The conversion is ${response.conversion_result} RUB`);
    } 
  } else {
    $('#error').text(`(<error>) ${response} (<error>)`);
    }
}

async function apiCall(input, exchange) {
    const response = await MoneyExchange.moneyConverter(input, exchange);
    getResults(response);
}

$(document).ready(function() {
  $('#button').on('click', function() {
    let input = parseInt($('#usd').val());
    let exchange = $('#selector').val();
    clearResults();
    apiCall(input, exchange);
  });
});