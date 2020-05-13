$(document).ready(function() {
    $("designlogo").click(function() {
 $(".logo").toggle();
 $(".designlogo").toggle();
    });
 });
 $(document).ready(function() {
     $("#par1").click(function() {
  $(".logo").toggle();
  $(".designlogo").toggle();
     });
  });
 
 $(document).ready(function() {
     $("ProductManagementlogo").click(function() {
  $(".logo2").toggle();
  $(".ProductManagementlogo").toggle();
     });
  });
  $(document).ready(function() {
     $("part3").click(function() {
  $(".logo2").toggle()
  ;$(".ProductManagementlogo").toggle();
     });
  });
  $(document).ready(function() {
     $("developmentlogo").click(function() {
  $(".logo1").toggle();
  $(".part2").toggle();
     });
  });
  $(document).ready(function() {
     $("part3").click(function() {
  $(".part3").toggle();
  $(".developmentlogo").toggle();
     });
  });
$(document).ready(function(){
    $("form").submit(function(){
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var text = document.getElementById("textarea");
        if (name.value == "" || email.value == "" || text.value == "") {
            alert("undefined");
        }
        else {
      alert("Hey " + name.value + "! We have received your message,Thank You!");
    }
    event.preventDefault();
    });
  });

  $(document).ready(function(){
   $("#work1").mouseover(function(){
     $("#work1").show();
   }).mouseout(function(){
     $("#work1").hide();
   });
 });
 $(document).ready(function(){
   $("#work2").mouseover(function(){
     $("#work2").show();
   }).mouseout(function(){
     $("#work2").hide();
   });
 });
 $(document).ready(function(){
   $("#work3").mouseover(function(){
     $("#work3").show();
   }).mouseout(function(){
     $("#work3").hide();
   });
 });
 $(document).ready(function(){
   $("#work4").mouseover(function(){
     $("#work4").show();
   }).mouseout(function(){
     $("#owork4").hide();
   });
 });
 
 $(document).ready(function(){
   $("#work5").mouseover(function(){
     $("#work5").show();
   }).mouseout(function(){
     $("#work5").hide();
   });
   $("#work6").mouseover(function(){
     $("#work6").show();
   }).mouseout(function(){
     $("#work6").hide();
   });
   $("#work7").mouseover(function(){
     $("#work7").show();
   }).mouseout(function(){
     $("#work7").hide();
   });
   $("#work8").mouseover(function(){
     $("#work8").show();
   }).mouseout(function(){
     $("#work8").hide();
   });
 });
 
 $(document).ready(function(){
   $("form#form34A").submit(function(event){
     // event.preventDefault();
     var name = $("input").val();
     var email = $("input").val();
     var message = $("textarea").val();
    
     alert (name + ", we have received your message. Thank you for reaching out to us.");
     
     else {
       alert("Please enter your name and email!");
     }
     
   });
 
 });
 