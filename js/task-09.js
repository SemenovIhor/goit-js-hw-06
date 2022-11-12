function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const outClick = document.querySelector(".color");

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor()
  outClick.textContent = randomColor
  document.body.style.backgroundColor = randomColor
});

