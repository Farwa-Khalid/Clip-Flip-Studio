document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll('.strip-btn');
  const cards = document.querySelectorAll('.portfolio-card');

  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.stopPropagation(); // prevent header dropdown from hijacking

      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const filter = this.dataset.filter;

      cards.forEach(card => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "block";
          card.style.pointerEvents = "auto";
          card.style.opacity = "1";
          card.style.cursor = "pointer"; // ← fix the cursor issue too
        } else {
          card.style.display = "none";
          card.style.pointerEvents = "none";
        }
      });
    });
  });

});