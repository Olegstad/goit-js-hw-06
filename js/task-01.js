
const categories = document.querySelector('#categories');

const itemCategories = categories.querySelectorAll('li.item');

console.log('Number of categories:', itemCategories.length);

const titleCategories = itemCategories.forEach(itemCategories => {
    console.log(`Category:`, itemCategories.firstElementChild.textContent);
    console.log(`Elements:`, itemCategories.lastElementChild.children.length);
});





