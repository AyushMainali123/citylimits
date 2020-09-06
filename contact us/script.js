const mobileOptionsSelector = document.querySelector('[data-mobileOptions]')
const navbarCrossSelector = document.querySelector('[data-cross]')
const navbarMenuSelector = document.querySelector('[data-menu]')

navbarMenuSelector.addEventListener('click', (e) => {
    // e.preventDefault()
    // console.log("Hey")
    mobileOptionsSelector.classList.add('open')
})

navbarCrossSelector.addEventListener('click', () => {
    mobileOptionsSelector.classList.remove('open');
})