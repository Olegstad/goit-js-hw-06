const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const addIngredients = ingredients => {
  
  return ingredients.map(ingredient => {
    const itemRef = document.createElement("li");
    itemRef.textContent = ingredient;
    itemRef.classList.add('item');
    
    return itemRef;
  });
};

const elem = addIngredients(ingredients);

ingredientsRef.append(...elem);

console.log(ingredientsRef);

// const listEl = document.querySelector(`#ingredients`);

// const listElItem = ingredients.map((element) => {
//   const itemEl = document.createElement(`li`);
//   itemEl.classList.add(`item`);
//   itemEl.textContent = element;
//   return itemEl;
// });

// listEl.prepend(...listElItem);
// console.log(listEl);