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

// Az összes szekció kiválasztása
const sections = document.querySelectorAll('.disease');
sections.forEach((section) => {
	const images = section.querySelectorAll('.image-gallery img');
	let currentImageIndex = 0;

	// Az első kép megjelenítése
	images[currentImageIndex].style.display = 'block';

	// A pagination gombok
	const prevButton = section.querySelector('.prev');
	const nextButton = section.querySelector('.next');

	// Kép váltó funkció
	function showImage(index) {
		// Elrejti az összes képet
		images.forEach((img) => {
			img.style.display = 'none';
		});

		// Megjeleníti a kiválasztott képet
		images[index].style.display = 'block';

		// A gombok láthatóságát állítjuk
		prevButton.disabled = index === 0;
		nextButton.disabled = index === images.length - 1;
	}

	// Eseménykezelők
	prevButton.addEventListener('click', () => {
		if (currentImageIndex > 0) {
			currentImageIndex--;
			showImage(currentImageIndex);
		}
	});

	nextButton.addEventListener('click', () => {
		if (currentImageIndex < images.length - 1) {
			currentImageIndex++;
			showImage(currentImageIndex);
		}
	});
});
