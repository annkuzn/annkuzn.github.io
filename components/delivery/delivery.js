const deliveryForm = document.querySelector('.delivery__form');

deliveryForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	const elements = Array.from(deliveryForm.elements);

	const data = elements.reduce((acc, elem) => {
		if(elem.name && elem.value) {
			acc.push({ name: elem.name, value: elem.value });
		}

		return acc;
	}, []);

	fetch('http://localhost:3000', {
		method: "POST",
		body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(() => {
		const body = document.querySelector('body');

		body.classList.add('popup-open');
	})
});