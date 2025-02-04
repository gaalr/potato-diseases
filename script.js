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

/* MODAL */

const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');

// Showing the modal
function showModal(title, content) {
	modalTitle.textContent = title;
	modalContent.innerHTML = content;
	modal.classList.remove('hidden');
}

// Contact link
document.getElementById('contactLink').addEventListener('click', function () {
	showModal(
		'Kapcsolat',
		'Ha kérdésed van, írj nekünk: <strong>email@domain.com</strong>'
	);
});

// Privacy link
document.getElementById('privacyLink').addEventListener('click', function () {
	showModal(
		'Adatvédelmi irányelvek',
		`
        <h3>1. Bevezetés</h3>
        <p>Ez az adatvédelmi tájékoztató tájékoztatást nyújt arról, hogy a weboldalunk (a továbbiakban: "Weboldal") milyen adatokat gyűjt és hogyan kezeli azokat.</p>
        
        <h3>2. Milyen adatokat gyűjtünk?</h3>
        <p>A Weboldal nem gyűjt és nem tárol személyes adatokat a látogatóiról. Az oldal kizárólag információs céllal működik, és nem használ regisztrációs rendszert vagy felhasználói fiókokat.</p>

        <h3>3. Google Fonts használata</h3>
        <p>A Weboldal betűtípusokat tölt be a Google Fonts szolgáltatásból. A Google Fonts a betűtípusokat közvetlenül a Google szervereiről tölti be, amelynek során a látogatók IP-címe továbbításra kerülhet a Google felé.</p>
        <p><a href="https://policies.google.com/privacy" target="_blank">Google adatvédelmi irányelvek</a></p>
        <p>Ha szeretné elkerülni a Google Fonts betöltését, használhat böngészőbővítményeket, amelyek blokkolják a külső betűtípusok betöltését.</p>

        <h3>4. Sütik (Cookies)</h3>
        <p>A Weboldal nem használ sütiket.</p>

        <h3>5. Külső hivatkozások</h3>
        <p>Előfordulhat, hogy a Weboldal külső weboldalakra mutató hivatkozásokat tartalmaz. Ezekre az oldalakra a saját adatvédelmi szabályaik vonatkoznak, ezért javasoljuk, hogy mindig olvassa el az adott oldal adatvédelmi tájékoztatóját.</p>

        <h3>6. Kapcsolat</h3>
        <p>Ha bármilyen kérdése van az adatvédelemmel kapcsolatban, az alábbi e-mail címen elérhet minket:</p>
        <p>✉ <a href="mailto:SAJATEMAIL@example.com">SAJATEMAIL@example.com</a></p>
        `
	);
});

// Terms link
document.getElementById('termsLink').addEventListener('click', function () {
	showModal(
		'Felhasználási feltételek',
		'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
	);
});

// Modal bezárása
closeModal.addEventListener('click', function () {
	modal.classList.add('hidden');
});

// Esc billentyű megnyomása esetén bezárás
document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		modal.classList.add('hidden');
	}
});

// Modalon kívüli kattintás esetén bezárás
window.addEventListener('click', function (event) {
	if (event.target === modal) {
		modal.classList.add('hidden');
	}
});

// Ha a modal tartalmára kattintunk, ne terjedjen tovább az esemény
document
	.querySelector('.modal-content')
	.addEventListener('click', function (event) {
		event.stopPropagation();
	});
