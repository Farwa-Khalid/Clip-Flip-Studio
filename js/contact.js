const form = document.getElementById("contactForm");
const submitButton = form.querySelector("button[type='submit']");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Disable button & show loading
  submitButton.disabled = true;
  const originalText = submitButton.textContent;
  submitButton.textContent = "Sending...";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
    });

    if (response.ok) {
      // Show success popup
      popup.style.display = "block";
      setTimeout(() => { popup.style.opacity = 1; }, 50);

      // Hide popup after 3 seconds
      setTimeout(() => {
        popup.style.opacity = 0;
        setTimeout(() => { popup.style.display = "none"; }, 500);
      }, 3000);

      form.reset(); // Clear form
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Network error. Please try again.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
});