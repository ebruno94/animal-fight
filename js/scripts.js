$(document).ready(function(){
  $("button#greet").click(function(){
    $("ul#p1").prepend("<li>Meow~!</li>");
    $("ul#p2").prepend("<li>Arf~!</li>")
  });

  $("button#attack").click(function(){
    $("ul#p1").prepend("<li>RAWR~!</li>");
    $("ul#p2").prepend("<li>AWOOOOOO~!</li>");
  });

  $("button#dog").click(function(){

    $("ul#p2").prepend("<li>AWOOOOOO~!</li>");
  });

  $("button#cat").click(function(){
    $("ul#p2").prepend("<li>AWOOOOOO~!</li>");
  });

  $("button#fox").click(function(){
    $("ul#p2").prepend("<li>AWOOOOOO~!</li>");
  });

  $("button#guppy").click(function(){
    $("ul#p2").prepend("<li>AWOOOOOO~!</li>");
  });

  $("button#trex").click(function(){
    $("ul#p2").prepend("<li>AWOOOOOO~!</li>");
  });

  $("button#walrus").click(function(){
    $("#animal2").hide();
    $(".row > .col-md-6:last-child").append(
      "<h2>Walrus</h2>");
  });
});
