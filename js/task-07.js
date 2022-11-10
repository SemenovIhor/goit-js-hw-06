const rangeInput = document.getElementById("font-size-control");
const output = document.getElementById("text");




rangeInput.addEventListener("change", (event) => {
    const rangeValue = rangeInput.value;
    console.log(rangeValue);
    
    const rangeSize = rangeValue + "px";
 

    output.style.fontSize = rangeSize;
   
    
});

 