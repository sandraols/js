// A modal box that appears when openButton is clicked and disappears when the closeButton is clicked

const modalBox = document.getElementById('modal-box');
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');

openButton.onclick = function() {
    modalBox.style.visibility = 'visible';
}

closeButton.onclick = function() {
    modalBox.style.visibility = 'hidden';
}