$(document).ready(function(){
  $("img#landing-page").click(function() {
  const age = parseInt(prompt("How old are you"));
  
  if (age >= 18) {
    $('#over-18').show();
    $('#landing-page').toggle();
  } if (age === 17) {
    $('#register-17').show();
    $('#landing-page').toggle();
  } if (age === 16) {
    $('#register-17').show();
    $('#landing-page').toggle();
  } if (age <= 15) {
    $('#under-18').show();
    $('#landing-page').toggle();
  }
  })  
});