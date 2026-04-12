const players = {};

function onYouTubeIframeAPIReady() {
  document.querySelectorAll("iframe").forEach((iframe) => {
    players[iframe.id] = new YT.Player(iframe.id);
  });
}

document.addEventListener("click", function () {
  Object.values(players).forEach(p => {
    if (p && p.unMute) {
      p.unMute();
      p.setVolume(100);
    }
  });
}, { once: true });