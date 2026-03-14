const track = document.querySelector(".marquee-track");
const clone = track.cloneNode(true);
clone.setAttribute("aria-hidden", "true");
track.parentNode.appendChild(clone);