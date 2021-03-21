$(document).ready(function(){
  $("#landing-page").click(function() {
  const age = parseInt(prompt("How old are you?"));
  
  if (age >= 18) {
    $('#register').show();
    $('#register-link').show();
    $('#mail-in-facts').show();
    $('#landing-page').toggle();
  } if (age === 17) {
    $('#register').show();
    $('#minor-notice').show();
    $('#register-link').show();
    $('#mail-in-facts').show();
    $('#landing-page').toggle();
  } if (age === 16) {
    $('#register').show();
    $('#minor-notice').show();
    $('#register-link').show();
    $('#mail-in-facts').show();
    $('#landing-page').toggle();
  } if (age <= 15) {
    $('#under-16').show();
    $('#mail-in-facts').show();
    $('#landing-page').toggle();
    }
  })  
});