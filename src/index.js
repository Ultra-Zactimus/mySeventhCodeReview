import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Euro from './js/euro.js';
import Yen from './js/euro.js';
import Rupee from './js/euro.js';
import Peso from './js/euro.js';
import Ruble from './js/euro.js';

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
    if (response.target_code === "EUR") {
    $('#euro').text(`The conversion for USD is ${response.conversion_result} EUR`);
    } else if (response.target_code === "JPY") {
    $('#yen').text(`The conversion for USD is ${response.conversion_result} JPY`);
    } else if (response.target_code === "INR") {
    $('#rupee').text(`The conversion for USD is ${response.conversion_result} INR`);
    } else if (response.target_code === "MXN") {
    $('#peso').text(`The conversion for USD is ${response.conversion_result} MXN`);
    } else if (response.target_code === "RUB") {
    $('#ruble').text(`The conversion for USD is ${response.conversion_result} RUB`);
    }
  } else {
    $('#error').text(`(<error>) ${response} (<error>)`);
  }
}

async function apiCall(exchange) {
  if (exchange.includes('EUR')) {
    async function euroCall(input) {
      const response = await Euro.moneyConverter(input);
      grabResults(response);
    }
  } else if (exchange.includes('JPY')) {
    async function yenCall(input) {
      const response = await Yen.moneyConverter(input);
      grabResults(response);
    }
  } else if (exchange.includes('INR')) {
    async function rupeeCall(input) {
      const response = await Rupee.moneyConverter(input);
      grabResults(response);
    }
  } else if (exchange.includes('MXN')) {
    async function pesoCall(input) {
      const response = await Peso.moneyConverter(input);
      grabResults(response);
    }
  } else if (exchange.includes('RUB')) {
    async function rubleCall(input) {
      const response = await Ruble.moneyConverter(input);
      grabResults(response);
    }
  }
}

$(document).ready(function() {
  $('#button').on('click', function() {
    let input = parseInt($('#usd').val());
    console.log(input);
    let exchange = $('#selector').val();
    console.log(exchange);
    apiCall(exchange);
  });
});