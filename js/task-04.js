const btnDes = document.querySelectorAll("button")[0];
const btnInc = document.querySelectorAll("button")[1]

let counterValue = 0;

btnDes.addEventListener(`click`, (event) => {
    counterValue = counterValue - 1;
    const valueEl = document.querySelector(`span`);
    valueEl.textContent = counterValue;
});

btnInc.addEventListener(`click`, (event) => {
    counterValue += 1;
    const valueEl = document.querySelector(`span`);
    valueEl.textContent = counterValue;
});