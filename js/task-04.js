const increment = document.querySelector(`[data-action="increment"]`);
const decrement = document.querySelector(`[data-action="decrement"]`);
const shownValue = document.querySelector("#value");

let counterValue = 0;

increment.addEventListener('click', btnIncrementHandler);
decrement.addEventListener('click', btnDecrementHandler);

function  btnIncrementHandler(event) { 
    counterValue += 1;
    shownValue.textContent = counterValue;
};

function btnDecrementHandler(event) {
    counterValue -= 1;
    shownValue.textContent = counterValue;
};