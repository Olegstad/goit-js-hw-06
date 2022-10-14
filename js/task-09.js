function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorRef = document.querySelector('.color');

const btnColorRef = document.querySelector('.change-color');

const bgRef = document.querySelector('body');

const onClick = () => { 

  bgRef.style.backgroundColor = getRandomHexColor();

  colorRef.textContent = getRandomHexColor();
}

btnColorRef.addEventListener("click", onClick);






// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.






