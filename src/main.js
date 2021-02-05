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

    if ($( "#mercury" ).click()) {
      const newAge = new Mercury(age, expect);
      const results = newAge.ageConv();
      alert(results);
    }

  });
});