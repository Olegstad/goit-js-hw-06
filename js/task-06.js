const inputRef = document.querySelector('input');

const inputLength = document.querySelector('[data-length="6"]');

const textInput = document.querySelector('#validation-input')

inputRef.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === Number(inputLength.dataset.length)) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
});

