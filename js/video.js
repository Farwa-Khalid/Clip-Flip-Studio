document.addEventListener("click", () => {
  const video = document.getElementById("heroVideo");

  if (!video) return; // safety check

  // Unmute smoothly
  video.muted = false;
  video.volume = 1;

  // Ensure it keeps playing
  video.play().catch(() => {});

}, { once: true });