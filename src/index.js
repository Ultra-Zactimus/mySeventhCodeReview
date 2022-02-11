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

function getResults(response) {
  if (response.result === "success") {
    // if (response.target_code === "EUR") {
      $('#euro').text(`The conversion is ${response.conversion_result} EUR`);
    // } else if (response.target_code === "JPY") {
    //   $('#yen').text(`The conversion is ${response.conversion_result} JPY`);
    // } else if (response.target_code === "IRN") {
    //   $('#rupee').text(`The conversion is ${response.conversion_result} INR`);
    // } else if (response.target_code === "MXN") {
    //   $('#peso').text(`The conversion is ${response.conversion_result} MXN`);
    // } else if (response.target_code === "RUB") {
    //   $('#ruble').text(`The conversion is ${response.conversion_result} RUB`);
    // } 
  } else {
    $('#error').text(`(<error>) ${response} (<error>)`);
    }
}

async function apiCall(input, exchange) {
  
    const euro = await Euro.moneyConverter(input, exchange);
    getResults(euro);

  // async function yen(input) {
  //   const yen = await Yen.moneyConverter(input);
  //   getResults(yen);
  // }
  // async function rupee(input) {
  //   const rupee = await Rupee.moneyConverter(input);
  //   getResults(rupee);
  // }
  // async function peso(input) {
  //   const peso = await Peso.moneyConverter(input);
  //   getResults(peso);
  // }
  // async function ruble(input) {
  //   const ruble = await Ruble.moneyConverter(input);
  //   getResults(ruble);
  // }
}

$(document).ready(function() {
  $('#button').on('click', function() {
    let input = parseInt($('#usd').val());
    console.log(input);
    let exchange = $('#selector').val();
    console.log(exchange);
    apiCall(input, exchange);
  });
});