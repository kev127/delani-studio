$(document).ready(function() {
    $("#designlogo").click(function() {
    $("#toogleDesignlogo").toggle();
  });
  $("#toogleDesignlogo").click(function(){
    $("#toogleDesignlogo").toggle();
    $("#designlogo").toggle();
     });
  });

  $(document).ready(function() {
  $("#developmentlogo").click(function() {
    $("#toogleDevelopmentlogo").toggle();
    });
  $("#toogleDevelopmentlogo").click(function() {
    $("#toogleDevelopmentlogo").toggle();
    $("#developmentlogo").toggle();
     });
  });

  $(document).ready(function() {
    $("#ProductManagementlogo").click(function() {
    $("#toogleProductManagementlogo").toggle();
  });
  $("#toogleProductManagementlogo").click(function(){
    $("#toogleProductManagementlogo").toggle();
    $("#ProductManagementlogo").toggle();
     });
  });

  $(document).ready(function(){
   $("#work1").mouseover(function(){
     $("#work1").fadeIn();
   }).mouseout(function(){
     $("#work1").fadeOut();
   });
 });
 $(document).ready(function(){
   $("#work2").mouseover(function(){
     $("#work2").fadeIn();
   }).mouseout(function(){
     $("#work2").fadeOut();
   });
 });
 $(document).ready(function(){
   $("#work3").mouseover(function(){
     $("#work3").fadeIn();
   }).mouseout(function(){
     $("#work3").fadeOut();
   });
 });
 $(document).ready(function(){
   $("#work4").mouseover(function(){
     $("#work4").fadeIn();
   }).mouseout(function(){
     $("#work4").fadeOut();
   });
 });
 
 $(document).ready(function(){
   $("#work5").mouseover(function(){
     $("#work5").fadeIn();
   }).mouseout(function(){
     $("#work5").fadeOut();
   });
   $("#work6").mouseover(function(){
     $("#work6").fadeIn();
   }).mouseout(function(){
     $("#work6").fadeOut();
   });
   $("#work7").mouseover(function(){
     $("#work7").fadeIn();
   }).mouseout(function(){
     $("#work7").fadeOut();
   });
   $("#work8").mouseover(function(){
     $("#work8").fadeIn();
   }).mouseout(function(){
     $("#work8").fadeOut();
   });
 });
 
 $(document).ready(function(){
   $("form#form34A").submit(function(event){
     // event.preventDefault();
     var name = $("input").val();
     var email = $("input").val();
     var message = $("textarea").val();
     if (inputName=="" || inputEmail=="" || x==""){
     alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
     else {
     
      alert('Please enter your name and email!');
     }
     
   });
 
 });
 