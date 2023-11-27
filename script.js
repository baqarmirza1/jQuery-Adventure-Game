$(".yes-button").click(function() {
  $(".Part-Two-Yes").show();
  $(".firstImage").hide();
  $(".button").hide();
});


$(".no-button").click(function() {
  $(".Part-Two-No").show();
  $(".firstImage").hide();
  $(".button").hide();
});



$(".mitm").dblclick(function(){
   $(".Story-Ending-Yes").show();
  $(".mitm").hide();
  $(".Part-Two-Yes").hide();
});

$(".loco").dblclick(function(){
   $(".Story-Ending-No").show();
   $(".mafia").hide();
  $(".Part-Two-No").hide();
});

$(".restart").click(function(){
  $(".Story-Ending-No").hide();
  $(".firstImage").show();
  $(".button").show();
});

$(".restart2").click(function(){
  $(".Story-Ending-Yes").hide();
  $(".firstImage").show();
  $(".button").show();
});
