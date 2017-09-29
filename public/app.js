// $('#formButton').click(function(){
//   console.log('wahooo!');
//   $.ajax({
//     url: '/chairs',
//     type: 'DELETE',
//     success: function(result) {
//       $('#chairTable').remove("<tr><td>" + c.model + "</td><td>" + c.type + "</td><td><button type='button' id='formButton'>" + "Delete" + "</button></td></tr>");
//     }
// });
var deleteElement = function(id){
  console.log(id);
}
$(document).ready(function(){
  $.get('/chairs', function(chairList){
    chairList.forEach(c=>{
      var endToday = 'please';
      $('#chairTable').append("<tr><td>" + c.model + "</td><td>" + c.type + "</td><td>" + "<i id ='formButton' class='fa fa-trash' aria-hidden='true'></i>" + "</td></tr>");
    });
  })
});
 