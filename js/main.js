import { setupHeader } from './header.js'
import { setupMobileMenu } from './hamburgerMenu.js'
import { setupNavBar } from './navBar.js'

const init = () => {
	setupHeader()
	setupMobileMenu()
	setupNavBar()
}

document.addEventListener('DOMContentLoaded', init)
