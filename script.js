'use strict';

document.addEventListener('DOMContentLoaded', function () {
	const navLinks = document.querySelectorAll('.nav-link');

	navLinks.forEach((link) => {
		link.addEventListener('click', function (event) {
			event.preventDefault(); // Megakadályozza az oldal újratöltését

			// Az adat-attribútum kinyerése
			const targetClass = this.getAttribute('data-target');
			const targetElement = document.querySelector(`.disease.${targetClass}`);

			// Először elrejtjük az összes betegséget
			document.querySelectorAll('.disease').forEach((disease) => {
				disease.classList.remove('active');
			});

			// Megjelenítjük a kiválasztott szekciót
			if (targetElement) {
				targetElement.classList.add('active');
			}
		});
	});
});
