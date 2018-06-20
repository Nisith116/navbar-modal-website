$(document).ready(function(){


   let counter = 0;
   $(window).resize(() => {

     if($(window).width() < 1106){

       $(".table").css("display","none")

   }else{
      $(".table").css({"display":"inline","flex-direction":""})

  }
  })

  $(".hide-nav").click(() => {
     counter++;
     console.log(counter);
     if(counter % 2 != 0){
       $(".table").css({"display":"flex","flex-direction":"column"})
     }else{
       $(".table").hide()
       counter = 0;
     }

})


})
