function toggle() {
    let list = document.getElementById('backdrop')

    if (list.classList.contains('closed')) {
        list.classList.replace('closed', 'opened')
    } else {
        list.classList.replace('opened', 'closed')
    }
}
