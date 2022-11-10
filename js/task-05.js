const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");


textInput.addEventListener("input", (event) => {
    event.preventDefault();
    if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else { output.textContent = event.currentTarget.value; }
  
});