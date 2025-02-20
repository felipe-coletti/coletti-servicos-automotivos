function toggle() {
    let backdrop = document.getElementById('backdrop')
    let menu = document.getElementById('mobile-nav')

    if (backdrop.classList.contains('closed')) {
        backdrop.classList.replace('closed', 'opened')
        menu.classList.replace('closed', 'opened')
    } else {
        backdrop.classList.replace('opened', 'closed')
        menu.classList.replace('opened', 'closed')
    }
}
