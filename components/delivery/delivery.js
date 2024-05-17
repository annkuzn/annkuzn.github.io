const deliveryForm = document.querySelector('.delivery-form');

deliveryForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	const elements = Array.from(deliveryForm.elements);

	const data = elements.reduce((acc, elem) => {
		if(elem.name && elem.value) {
			acc.push({ name: elem.name, value: elem.value });
		}

		return acc;
	}, []);

	fetch('', {
		method: "POST",
		body: JSON.stringify(data),
	});
	
	const body = document.querySelector('body');

	body.classList.add('popup-open');
});

deliveryForm.elements.name.addEventListener('input', (e) => {
	const lastChar = e.target.value[e.target.value.length - 1];

	if(lastChar === '.') {
		e.target.value = e.target.value.slice(0, -1);
	}
});
