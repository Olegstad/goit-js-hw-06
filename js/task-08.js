const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
 
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    } else {
        console.log({ 'Email': email.value, 'Password': password.value });
        form.reset();
    }
});


// 1. передаєм event параметром
// 2. недаємо перезавантажити сторінку preventDefault
// 3. отримуємо значення полів форми
// 4. перевіряємо чи є пусті поля
// 5. скидаємо форму