function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const outClick = document.querySelector(".color");

button.addEventListener("click", () => {

  outClick.textContent = getRandomHexColor()
  document.body.style.backgroundColor = getRandomHexColor()
});

