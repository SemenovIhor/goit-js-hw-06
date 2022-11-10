const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItemsEl = document.getElementById("ingredients");


ingredients.forEach( name => {
  const ingredientsItemEl = document.createElement("li")

  ingredientsItemEl.textContent = name

  ingredientsItemsEl.append(ingredientsItemEl)
});

