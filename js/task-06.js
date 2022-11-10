const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length >= textInput.dataset.length) {
        textInput.classList.remove('invalid')
        textInput.classList.add('valid')
        
    } else if (event.currentTarget.value.length < textInput.dataset.length) {
        textInput.classList.add('invalid')
    } 
});