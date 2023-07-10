const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const gradientBtn = document.getElementById('gradientBtn');

function setGradient() {
    document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

gradientBtn.addEventListener('click', setGradient);
