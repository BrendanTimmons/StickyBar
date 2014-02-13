Options defaults.

offset: 0

// Sets how far you have to scroll (pixels) before the header becomes sticky.

position: top

// Sets position of the sticky bar. Accepts either top or bottom.

negOffset: false

// when set true will negatively offset the bar by the offset height set above for a smoother scrolling experience.

Example:

$(".header").stickyBar({
  offset:20,
  negOffset: true,
  position: "top"
});