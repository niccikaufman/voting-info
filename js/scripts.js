$(document).ready(function(){
  const age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#over-18').show();
  } if (age === 17) {
    $('#register-17').show();
  } if (age < 17) {
    $('#under-18').show();
  }
});