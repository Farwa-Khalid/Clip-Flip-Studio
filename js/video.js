document.addEventListener("click", function () {
  const video = document.getElementById("heroVideo");
  video.muted = false;
  video.volume = 1;
}, { once: true });