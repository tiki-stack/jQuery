


$(document).keypress(event, function() {
  $("h1").text(event.key);
});

$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
