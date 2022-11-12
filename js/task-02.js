const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItemsEl = document.getElementById("ingredients");


const arrayItem = ingredients.map( name => {
  const ingredientsItemEl = document.createElement("li")
  ingredientsItemEl.textContent = name
  return ingredientsItemEl
});

ingredientsItemsEl.append(...arrayItem);
