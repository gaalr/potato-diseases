'use strict';

document.addEventListener('DOMContentLoaded', function () {
	// Kattintásra történő szekcióváltás
	const navLinks = document.querySelectorAll('.nav-link');
	const mainContent = document.querySelector('.main-content'); // A középső tartalom
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

			// A fő üdvözlő tartalom eltüntetése
			if (mainContent) {
				mainContent.style.display = 'none';
			}
		});
	});
});

// Képváltás funkció minden szekcióra
const diseaseSections = document.querySelectorAll('.disease');
diseaseSections.forEach((section) => {
	const images = section.querySelectorAll('.image-item');
	let currentImageIndex = 0;

	// Ha van kép, az első képet megjelenítjük
	if (images.length > 0) {
		images[currentImageIndex].classList.add('active');
	}

	// Képváltás
	function showImage(index) {
		// Elrejtjük az összes képet
		images.forEach((img, i) => {
			img.classList.remove('active');
		});

		// Az aktuális képet megjelenítjük
		images[index].classList.add('active');

		// Frissítjük a gombok állapotát
		const prevButton = section.querySelector('.prev');
		const nextButton = section.querySelector('.next');
		prevButton.disabled = index === 0;
		nextButton.disabled = index === images.length - 1;
	}

	// Gombok eseménykezelői
	const prevButton = section.querySelector('.prev');
	const nextButton = section.querySelector('.next');

	if (prevButton && nextButton) {
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
	}
});
