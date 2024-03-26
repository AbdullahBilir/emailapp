const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
let array = [];

btn.addEventListener("click", () => {
  const value = input.value;
  if (value.includes("@gmail.com") || value.includes("@hotmail.com")) {
    array.push(value);
    console.log(array);
    localStorage.setItem("mail", JSON.stringify(array));
    location.href = "succes.html";
  } else {
    input.style.color = "white";
    input.style.backgroundColor = "rgb(255, 97, 85)";

    input.value = "Email adresi geçersiz";
  }
});
