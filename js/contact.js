

const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", function(e){
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(form)
  })
  .then(response => {
      popup.classList.add("show");
      form.reset();
  })
  .catch(error => alert("Something went wrong"));
});

function closePopup(){
  popup.classList.remove("show");
}

