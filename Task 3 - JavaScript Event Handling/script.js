const button = document.getElementById('changeColorBtn');
const colorDisplay = document.getElementById('colorCode');

function getRandomColor() {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return color;
}

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorDisplay.textContent = `Current Color: ${randomColor}`;
}

button.addEventListener('click', changeBackgroundColor);
