$(document).ready(function(){
  $(".header").stickyBar({
    offset:20,
    negOffset: true,
    position: "top"
  });

  $(".footer").stickyBar({
    position: "bottom"
  });
});