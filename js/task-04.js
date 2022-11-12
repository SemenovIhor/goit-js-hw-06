let counterValue = document.getElementById("value");
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="emincrent"]');

let counter = 0;

const handleClickDown = event => {
    counter -= 1
    counterValue.textContent = counter
};

const handleClickUp = event => {
    counter += 1
    counterValue.textContent = counter
};

decrBtn.addEventListener("click", handleClickDown);
incrBtn.addEventListener("click", handleClickUp);