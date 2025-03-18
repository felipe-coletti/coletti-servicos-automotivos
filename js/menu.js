const mobileMenu = document.getElementById('mobile-nav')
const backdrop = document.getElementById('backdrop')

function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('open')

    backdrop.classList.toggle('open', !isOpen)
    mobileMenu.classList.toggle('open', !isOpen)

    if (window.innerWidth <= 600) {
        document.body.style.overflowY = isOpen ? 'auto' : 'hidden'
    }
}
