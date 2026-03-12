
  const toggle = document.getElementById("servicesToggle");
  const menu = document.getElementById("servicesMenu");

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("active");
  });

  // Optional: Close if clicking outside
  document.addEventListener("click", function (e) {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("active");
    }
  });
