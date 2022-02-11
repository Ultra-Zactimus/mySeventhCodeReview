import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange.js';

function clearResults () {
    $('#').val("");
    $('#').text("");
    $('#').text("");
    $('#').text("");
    $('#').text("");
    $('#').text("");
    $('#').text("");
    $('#').text("");
    $('#').text("");
}

function grabResults(response) {
  if (response.main) {
    $('#').text(``);
    $('#').text(``);
    $('#').text(``);
    $('#').text(``);
    $('#').text(``);
  } else {
    $('#error').text(`(<error>) ${response} (<error>)`);
    $('#typeErr1').text(`Error 404 Not Found: "This means you have an invalid input."`);
    $('#typeErr2').text(`Error 401 Unauthorized: "This means your API Key is invalid."`);
  }
}