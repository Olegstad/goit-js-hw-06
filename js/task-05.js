const inputRef = document.querySelector('#name-input');

const outputRef = document.querySelector('#name-output');

inputRef.addEventListener("input", (event) => {

  const inputValue = event.currentTarget.value;

  outputRef.textContent = `${inputValue}`;
  
});

