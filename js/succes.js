window.addEventListener("DOMContentLoaded", () => {
  const email = document.querySelector(".email");
  const mail = JSON.parse(localStorage.getItem("mail"));

  email.textContent = mail;
});
