function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyeBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('div#boxes');


createBtn.addEventListener("click", onBtnCreateClickHandler);
destroyeBtn.addEventListener("click", onBtnDestroyClickHandler);


function onBtnCreateClickHandler() {
  
  if (inputEl.value >= 100) {
    alert('Введено завелике число, введіть число до 100');
  } else {
    createBoxes(inputEl.value);
  };
}

function onBtnDestroyClickHandler() {
  boxes.innerHTML = '';
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  let arrayDiv = [];

  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${20 + (i * 10)}px`;
    div.style.height = `${20 + (i * 10)}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.textContent = i;

    arrayDiv.push(div);
  };
  boxes.append(...arrayDiv);
};
