import {Calc , Mercury, Venus, Mars, Jupiter} from './js/calc.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';







$(document).ready(function(){
  $("#form").click(function(event){
    event.preventDefault();
    const age = $("#age").val();
    const expect = $("#expect").val();

    $("#mercury").onclick = function() {
      const newAge = new Mercury(age, expect);
      const results = newAge.ageConv();
      alert(results);
    }
    $("#venus").onclick() = function {
      const newAge = new Venus(age, expect);
      const results = newAge.ageConv();
      alert(results);
    }
    $("#mars").onclick() function {
      const newAge = new Mars(age, expect);
      const results = newAge.ageConv();
      alert(results);
    }
    $("#jupiter").onclick() = function {
      const newAge = new Jupiter(age, expect);
      const results = newAge.ageConv();
    }

  });
});