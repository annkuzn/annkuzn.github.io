
import data from './data.json' assert { type: 'json' };

const PIZZA_CARD_BUTTON_TEXT = "В корзину";

const showcase = document.querySelector('.showcase');
const pizzaList = document.createElement('ul');

pizzaList.className = "showcase__list";

data.forEach(pizza => {
	const item = document.createElement('li');
	const img = document.createElement('img');
	const title = document.createElement('h4');
	const description = document.createElement('p');
	const button = document.createElement('button');
	const buttonInner = document.createElement('h5');

	item.className = "pizza-card";
	img.className = "pizza-card__img";
	title.className = "pizza-card__title";
	description.className = "pizza-card__description";
	button.className = "pizza-card__button";

	img.src = pizza.image;
	title.innerText = pizza.title;
	description.innerText = pizza.description;
	buttonInner.innerText = PIZZA_CARD_BUTTON_TEXT;

	button.append(buttonInner);
	item.append(img, title, description, button);
	pizzaList.append(item);
});

showcase.append(pizzaList);