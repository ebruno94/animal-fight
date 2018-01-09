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
    $("ul#cat").prepend("<li>RAWR~!</li>");
    $("ul#dog").prepend("<li>AWOOOOOO~!</li>");
  });

  $("button#cat").click(function(){
    $("ul#cat").prepend("<li>RAWR~!</li>");
    $("ul#dog").prepend("<li>AWOOOOOO~!</li>");
  });

  $("button#fox").click(function(){
    $("ul#cat").prepend("<li>RAWR~!</li>");
    $("ul#dog").prepend("<li>AWOOOOOO~!</li>");
  });

  $("button#guppy").click(function(){
    $("ul#cat").prepend("<li>RAWR~!</li>");
    $("ul#dog").prepend("<li>AWOOOOOO~!</li>");
  });

  $("button#trex").click(function(){
    $("ul#cat").prepend("<li>RAWR~!</li>");
    $("ul#dog").prepend("<li>AWOOOOOO~!</li>");
  });

  $("button#walrus").click(function(){
    $("ul#cat").prepend("<li>RAWR~!</li>");
    $("ul#dog").prepend("<li>AWOOOOOO~!</li>");
  });
});
