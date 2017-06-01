$(document).ready(function() {
  $("#platy").click(function() {
    $("div.plat").show();
    $("div.coot").hide();
    $("div.nar").hide();
  });
  $("#coot").click(function() {
    $("div.coot").show();
    $("div.plat").hide();
    $("div.nar").hide();
  });
  $("#narwhal").click(function() {
    $("div.nar").show();
    $("div.coot").hide();
    $("div.plat").hide();
  });
});
