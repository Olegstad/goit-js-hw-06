// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categories = document.querySelector('#categories');

const itemCategories = categories.querySelectorAll('li.item');

console.log('Number of categories:', itemCategories.length);

const titleCategories = categories.querySelectorAll('h2');

titleCategories.forEach(titleCategories => {
    console.log(`Categoriy:`, titleCategories.textContent);
});

const liOfItemCategories = categories.querySelectorAll('li.item');

liOfItemCategories.forEach(liOfItemCategories => {
    console.log(`Elements:`, liOfItemCategories.length);
});

// console.log('Elements:', liOfItemCategories.length);

