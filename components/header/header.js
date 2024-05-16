const menuButton = document.querySelector('.menu__button');
const headerContent = document.querySelector('.header__content');

menuButton.addEventListener('click', () => {

	if(headerContent.classList.contains('close')) {
		headerContent.classList.remove('close');
		headerContent.classList.add('open');
	} else {
		headerContent.classList.remove('open');
		headerContent.classList.add('close');
	}
});