
const track = document.querySelector('.testimonial-track');
const prevBtn = document.querySelector('.testimonial-btn.prev');
const nextBtn = document.querySelector('.testimonial-btn.next');

let scrollAmount = 0;
const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 30; // width + gap

nextBtn.addEventListener('click', () => {
  scrollAmount += cardWidth;
  if(scrollAmount > track.scrollWidth - track.parentElement.offsetWidth) {
    scrollAmount = 0; // loop back
  }
  track.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
  scrollAmount -= cardWidth;
  if(scrollAmount < 0) {
    scrollAmount = track.scrollWidth - track.parentElement.offsetWidth; // loop to end
  }
  track.style.transform = `translateX(-${scrollAmount}px)`;
});
