$(document).ready(function() {

  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>meow</li>");
    $("ul#dog").prepend("<li>bark bark</li>");

    // $("ul#cat").children("li").click(function() {
    //   $(this).css("background-color", "green");
    // });
    $("ul#cat").children("li").click(function() {
      $(this).remove();
    });

  });

  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>bark</li>");
    $("ul#cat").prepend("<li>meow meeooww</li>");

    $("ul#dog").children("li").click(function() {
      $(this).css("background-color", "yellow");
    });
  });

  $("button#add").click(function() {
    $("p#imgbox").after("<img id='theImg' src='http://lorempixel.com/400/200/'/>");
  });


});
