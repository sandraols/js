// Create an HTML page with traffic lights and a button that switches the color to the next one.

let lights = document.getElementsByClassName('light');
let button = document.getElementById('button');
let currentLight;

button.addEventListener('click', function() {
    console.log(lights);
    for (let i = 0; i < lights.length; i++) {
        if (!currentLight) { 
            console.log(currentLight);
            console.log(lights.firstChild);
            lights[i].classList.add('active');
            currentLight = lights[i];
        } else {
            // nextSibling methods returns the next element
            // currentLight = lights.nextSibling;
            console.log(currentLight);
            lights[i].classList.remove('active');
        }
        
}
  });