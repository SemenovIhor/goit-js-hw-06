const categoriesAmount = document.querySelectorAll('.item');

console.log("Number of categories:", categoriesAmount.length);

// console.log(categoriesAmount);

categoriesAmount.forEach((number) => {

    console.log("Category:",number.firstElementChild.textContent);
    console.log("Elements:",number.lastElementChild.children.length);

});


