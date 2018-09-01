//define functions here

function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass("tasty")
  });
}

<<<<<<< HEAD
function pressIt(){
  $("form").on("keydown", function(e){
    if (e.which == 71){
      window.alert("G was pressed.");
=======
function PressIt() {
  $('input').on('keydown', function(e) {
    if (e.which == 71){
      window.alert('G');
>>>>>>> 3365508ea1254d3cd0beefd60ee85d1bbcb37932
    }
  });
}

<<<<<<< HEAD
=======

>>>>>>> 3365508ea1254d3cd0beefd60ee85d1bbcb37932
function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
    return;
  });
}
$(document).ready(function(){

// call functions here

});
