document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll('.strip-btn');
  const cards = document.querySelectorAll('.portfolio-card');
  const modal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  const closeBtn = modal.querySelector('.close');

  // Category filter
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      cards.forEach(card => {
        const cardFilter = card.dataset.category;

        if (filter === "all" || cardFilter === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Open video modal
  cards.forEach(card => {
    if (card.dataset.video) {
      card.addEventListener('click', () => {
        videoFrame.src = card.dataset.video + "?autoplay=1";
        modal.style.display = "flex";
      });
    }
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
    videoFrame.src = ""; // stop video
  });

  // Click outside modal to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      videoFrame.src = "";
    }
  });

});