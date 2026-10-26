document.addEventListener('DOMContentLoaded', function () {
	var toggle = document.querySelector('.nav__toggle');
	var navigation = document.querySelector('#primary-navigation');

	if (!toggle || !navigation) return;

	toggle.addEventListener('click', function () {
		var isOpen = toggle.getAttribute('aria-expanded') === 'true';
		toggle.setAttribute('aria-expanded', String(!isOpen));
		toggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
		navigation.classList.toggle('is-open', !isOpen);
	});

	navigation.addEventListener('click', function (event) {
		if (event.target.closest('a')) {
			toggle.setAttribute('aria-expanded', 'false');
			toggle.setAttribute('aria-label', 'Open navigation menu');
			navigation.classList.remove('is-open');
		}
	});

	document.addEventListener('click', function (event) {
		if (!event.target.closest('#navbar')) {
			toggle.setAttribute('aria-expanded', 'false');
			toggle.setAttribute('aria-label', 'Open navigation menu');
			navigation.classList.remove('is-open');
		}
	});
});
