const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener('input', changeFontSize);

function changeFontSize(event) { 
    const currentSize = event.currentTarget.value;
    text.style.fontSize = `${currentSize}px`;
};
