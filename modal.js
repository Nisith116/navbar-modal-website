$(document).ready(function(){
  $("#btn-1").click(function() {
      $('#Modal-id').css("display","block");
  })


  $(".close").click(function() {
      $('#Modal-id').css("display","none");
  })


  $(window).click(function(e) {
    var mode = $(e.target)
      if (mode.is("#Modal-id") ) {
          $('#Modal-id').css("display","none");
      }
  });


})
