$(document).ready(function(){
  $.get('/chairs', function(chairList){
    chairList.forEach(c=>{
      var objectId = c._id
      $('#chairTable').append("<tr id='remover'><td>" + c.model + "</td><td>" + c.type + "</td><td><button id='formButton' data-id='" + objectId + "'>Click me for delete</button></td></tr>")
    });
  });
  $(document).on('click', '#formButton', function(event){
    var r = $('#remover');
        $.ajax({
          method:'DELETE',
          url:'/chairs/' + $(this).attr('data-id'),
          success : function( data) {
            r.remove();
         },         
        });
      });
    });