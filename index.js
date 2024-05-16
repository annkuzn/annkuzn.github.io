import './components/header/header.js';
import "./components/showcase/showcase.js";
import "./components/delivery/delivery.js";

const popupButton = document.querySelector('.popup__button');
const body = document.querySelector('body');

popupButton.addEventListener('click', () => {
	body.classList.remove('popup-open');
});