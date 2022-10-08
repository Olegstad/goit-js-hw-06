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