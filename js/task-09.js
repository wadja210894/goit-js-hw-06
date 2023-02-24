function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor(event) { 
  const randomColor = getRandomHexColor();
  colorSpan.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
};