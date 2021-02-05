import { Calc, Mercury, Venus, Mars, Jupiter } from './js/calc.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function () {

  document.getElementById("mercury").onclick = function () {
    const age = $("#age").val();
    const expect = $("#expect").val();
    const newAge = new Mercury(age, expect);
    const results = newAge.ageConv();
    $("#results").text(results);
    $(".resultsWindow").show;
    document.getElementById("form").reset();
  };

  document.getElementById("venus").onclick = function () {
    const age = $("#age").val();
    const expect = $("#expect").val();
    const newAge = new Venus(age, expect);
    const results = newAge.ageConv();
    $("#results").text(results);
    $(".resultsWindow").show;
    document.getElementById("form").reset();
  };

  document.getElementById("mars").onclick = function () {
    const age = $("#age").val();
    const expect = $("#expect").val();
    const newAge = new Mars(age, expect);
    const results = newAge.ageConv();
    $("#results").text(results);
    $(".resultsWindow").show;
    document.getElementById("form").reset();
  };

  document.getElementById("jupiter").onclick = function () {
    const age = $("#age").val();
    const expect = $("#expect").val();
    const newAge = new Jupiter(age, expect);
    const results = newAge.ageConv();
    $("#results").text(results);
    $(".resultsWindow").show;
    document.getElementById("form").reset();
  };

});
