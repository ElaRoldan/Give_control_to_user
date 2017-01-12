$(document).ready(function(){
  $("#editor").on("submit", function(event){
  event.preventDefault();
  //Declara la variable para cada campo 
  var selector = $("#selector").val();
  var property = $("#property").val();
  var value = $("#value").val();
  //Borra los valores de la forma para poderlos usar nuevamente
  $("#selector").val(" ");
  $("#property").val(" ");
  $("#value").val(" ");
  //La funcion css quer aplica la propiedad y el valor al elemento del dom seleccionado
  $(selector).css(property, value);  
  });
});
