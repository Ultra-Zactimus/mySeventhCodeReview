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
  if (response.main) {
    $('#euro').text(`The conversion for ${input} USD is ${response.conversion_rates.EUR} EUR`);
    $('#yen').text(`The conversion for ${input} USD is ${response.conversion_rates.JPY} JPY`);
    $('#rupee').text(`The conversion for ${input} USD is ${response.conversion_rates.INR} INR`);
    $('#peso').text(`The conversion for ${input} USD is ${response.conversion_rates.MXN} MXN`);
    $('#ruble').text(`The conversion for ${input} USD is ${response.conversion_rates.RUB} RUB`);
  } else {
    $('#error').text(`(<error>) ${response} (<error>)`);
    // $('#typeErr1').text(`Error 404 Not Found: "This means you have entered an invalid input."`);
    // $('#typeErr2').text(`Error 401 Unauthorized: "This means your API Key is invalid."`);
  }
}

async function apiCall(exchange, input) {
  const response = await Exchange.moneyConverter(exchange, input);
  grabResults(response);
}

$(document).ready(function() {
  $('#button').on('click', function() {
    let input = $('#usd').val();
    let exchange = $('#selector').val();
    apiCall(exchange, input);
    console.log(input);
    console.log(exchange);
  });
});