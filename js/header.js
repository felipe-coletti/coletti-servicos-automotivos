var header = document.getElementById('header')

if (header.classList.contains('header-background') && window.scrollY === 0) {
    header.classList.remove('header-background')
}

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add('header-background')
    } else {
        header.classList.remove('header-background')
    }
})
