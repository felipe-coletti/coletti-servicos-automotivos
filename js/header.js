const header = document.getElementById('header')

export const setupHeader = () => {
	if (header.classList.contains('header-background') && window.scrollY === 0) {
		header.classList.remove('header-background')
	}

	window.addEventListener('scroll', function () {
		header.classList.toggle('header-background', window.scrollY > 0)
	})
}
