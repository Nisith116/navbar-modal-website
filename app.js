$(document).ready(function(){
  $(".input-field").focus(function(){
    $(".input-field").addClass("input-focus")
  });

  $(".input-field").focusout(function(){
    $(".input-field").removeClass("input-focus")
  });

  $("#list-4").click(function(){
    $(".dropdown").css("display","block")
  });

  $("#list-4").focusout(function(){
    $(".dropdown").css("display","none")
  });

  $(".dropdown-menu").click(function(){
    $(this).css("background","blue")
  });

  $("#list-5").click(function(e){
    e.preventDefault();
  });


  $(".paragraph-1").click(function(){
    $(".paragraph-2").toggleClass("displayAll");
    $(".paragraph-4").css("display","none");

  })


  $(".paragraph-3").click(function(){
      if(($(".paragraph-4").css("display")=="none") || $(".paragraph-2").hasClass("displayAll")){
        $(".paragraph-4").css("display","block");
        $(".paragraph-2").removeClass("displayAll");
      }else{
        $(".paragraph-4").css("display","none");
    }




  })



})
