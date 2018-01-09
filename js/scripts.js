$(document).ready(function(){
  $("button#greet").click(function(){
    $("ul#cat").prepend("<li>Meow~!</li>");
    $("ul#dog").prepend("<li>Arf~!</li>")
  });

  $("button#attack").click(function(){
    $("ul#cat").prepend("<li>RAWR~!</li>");
    $("ul#dog").prepend("<li>AWOOOOOO~!</li>");
  });
});
