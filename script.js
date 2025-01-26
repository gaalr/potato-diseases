document.querySelectorAll('.accordion-header').forEach((button) => {
	button.addEventListener('click', () => {
		const accordionItem = button.parentElement;
		accordionItem.classList.toggle('open');
	});
});
