const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul#ingredients');

const items = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList = 'item';
  ingredientItem.textContent = ingredient;
  return ingredientItem;
});

ingredientsList.append(...items);

//============================================
// const makeIngredients = ingredients.map(ingredient => `<li class = "item">${ingredient}</li>`).join('');
// ingredientsList.insertAdjacentHTML("afterbegin", makeIngredients);
//============================================
// for (const ingredient of ingredients) {
//   const ingredientItem = document.createElement('li');
//   ingredientItem.className = 'item';
//   ingredientItem.textContent = ingredient;
//   ingredientsList.append(ingredientItem);
// };
//============================================
// ingredients.map(ingredient => {
//   const li = document.createElement('li');
//   li.textContent = ingredient;
//   li.className = 'item';
//   return li;
// }).reduce((accumulator, currentElement) => {
//   accumulator.append(currentElement);
//   return accumulator;
// }, ingredientsList);