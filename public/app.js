$(document).ready(function(){

$.get('/chairs', function(chairList){
  chairList.forEach(c=> {
  $('#chairTable').append("<tr><td>" + c.model + "</td><td>" + c.type + "</td></tr>");
   });
  }); 
});