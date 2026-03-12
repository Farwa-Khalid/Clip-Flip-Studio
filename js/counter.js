const counters = document.querySelectorAll('.counter');
const counterBoxes = document.querySelectorAll('.counter-box');

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const format = counter.getAttribute('data-format');   // '+' for Years etc
  const suffix = counter.getAttribute('data-suffix');   // e.g., 'M+'
  const isSlow = counter.getAttribute('data-slow') === "true";  // only Years

  // Set speed
  let increment, interval;
  if(isSlow){
    increment = 1;   // slow
    interval = 300;  // slow update
  } else {
    increment = Math.ceil(target / 200); // fast
    interval = 20;
  }

  const updateCount = () => {
    let count = +counter.innerText.replace(/\D/g, ''); // remove non-digits

    if(count < target){
      count += increment;
      if(count > target) count = target;
      counter.innerText = count.toLocaleString() + (format ? format : '') + (suffix ? suffix : '');
      setTimeout(updateCount, interval);
    } else {
      counter.innerText = target.toLocaleString() + (format ? format : '') + (suffix ? suffix : '');
    }
  }
  updateCount();
}

// Animate on scroll into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const counter = entry.target.querySelector('.counter');
      entry.target.classList.add('visible');
      animateCounter(counter);
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.5});

counterBoxes.forEach(box => observer.observe(box));