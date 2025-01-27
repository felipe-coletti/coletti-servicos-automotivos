document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const targetId = this.getAttribute('href').substring(1)
        const targetElement = document.getElementById(targetId)
        const headerHeight = document.querySelector('header').offsetHeight

        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
        })
    })
})
