const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navigationLinks = document.querySelectorAll('nav a');

navigationLinks.forEach((link) => {
	const linkPage = link.getAttribute('href');

	if (linkPage === currentPage) {
		link.classList.add('active');
		link.setAttribute('aria-current', 'page');
	}
});
