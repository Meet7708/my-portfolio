// Add a small interactive response to the contact button.
const contactButton = document.getElementById("contactButton");
const message = document.getElementById("message");
const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}

if (contactButton && message) {
contactButton.addEventListener("click", () => {
message.textContent = "Hello! Thanks for visiting my portfolio. Have a great day!";
contactButton.textContent = "Hello to you too!";
contactButton.setAttribute("aria-pressed", "true");
});
}