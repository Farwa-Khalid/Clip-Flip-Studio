const steps = document.querySelectorAll('.process-step');

steps.forEach((step, i) => {
  setTimeout(() => {
    step.classList.add('visible');
  }, i * 600);
});