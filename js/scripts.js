$(document).ready(function() {

  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>meow</li>");
    $("ul#dog").prepend("<li>bark bark</li>");

    $("ul#cat").children("li").click(function() {
      $(this).css("background-color", "green");
    });
  });

  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>bark</li>");
    $("ul#cat").prepend("<li>meow meeooww</li>");

    $("ul#dog").children("li").click(function() {
      $(this).css("background-color", "yellow");
    });
  });



});
