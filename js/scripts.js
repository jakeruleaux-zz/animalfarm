$(document).ready(function() {
  $("button#platy").click(function() {
    $("div.plat").show();
  });
  $("button#coot").click(function() {
    $("div.coot").show();
  });
  $("button#narwhal").click(function() {
    $("div.nar").show();
  });
    $("div.nar").children().click(function() {
      $(this).remove();
  });
  $("div.plat").children().click(function() {
    $(this).remove();
  });
  $("div.coot").children().click(function() {
    $(this).remove();
  });
});
