let counterValue = document.getElementById("value");



const decrBtn = document.querySelector('button[data-action="decrement"]');


const incrBtn = document.querySelector('button[data-action="emincrent"]');


const handleClickDown = event => {
    counterValue.textContent = Number(counterValue.textContent) - 1
};

const handleClickUp = event => {
    counterValue.textContent = Number(counterValue.textContent) + 1
};

decrBtn.addEventListener("click", handleClickDown);
incrBtn.addEventListener("click", handleClickUp);