// Traffic lights that switches the color to the next one.

let button = document.getElementById('button');
const redLight = document.getElementById('red-light');
const orangeLight = document.getElementById('orange-light');
const greenLight = document.getElementById('green-light');

button.addEventListener('click', function() {
    let activeLight = document.getElementsByClassName('active')[0];
    activeLight.classList.remove('active');
    let color = activeLight.id;

    if (color === 'red-light') {
        orangeLight.classList.add('active');
    } 
    if (color === 'orange-light') {
        greenLight.classList.add('active');
    }
    if (color === 'green-light') {
        redLight.classList.add('active');
    }
});