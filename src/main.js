import { Mercury, Venus, Mars, Jupiter } from './js/calc.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



document.getElementById("mercury").onclick = function () {
  const age = $("#age").val();
  const expect = $("#expect").val();
  const newAge = new Mercury(age, expect);
  const results = newAge.ageConv();
  $(".resultsDisplay").text(results);
  $(".resultsWindow").show;
  alert(results);
  document.getElementById("form").reset();
};

document.getElementById("venus").onclick = function () {
  const age = $("#age").val();
  const expect = $("#expect").val();
  const newAge = new Venus(age, expect);
  const results = newAge.ageConv();
  $(".resultsDisplay").text(results);
  $(".resultsWindow").show;
  alert(results);
  document.getElementById("form").reset();
};

document.getElementById("mars").onclick = function () {
  const age = $("#age").val();
  const expect = $("#expect").val();
  const newAge = new Mars(age, expect);
  const results = newAge.ageConv();
  $(".resultsDisplay").text(results);
  $(".resultsWindow").show;
  alert(results);
  document.getElementById("form").reset();
};

document.getElementById("jupiter").onclick = function () {
  const age = $("#age").val();
  const expect = $("#expect").val();
  const newAge = new Jupiter(age, expect);
  const results = newAge.ageConv(); 
  alert(results);
  $(".resultsDisplay").text(results);
  $(".resultsWindow").show;
  document.getElementById("form").reset();
};

$(document).ready(function () {
  $("#form").click(function (event) {
    event.preventDefault();

    $(".resultsDisplay").text(results);
    $(".resultsWindow").show;
  });
});
