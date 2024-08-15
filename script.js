const burgerMenu = document.getElementsByClassName('burger-mobile')[0];
const burgerMenuButton = document.getElementsByClassName('burger-menu-button')[0];
const burgerMenuButtonIcon = burgerMenuButton.getElementsByTagName('i')[0];

burgerMenuButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    const isOpen = burgerMenu.classList.contains('open');
    burgerMenuButtonIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});
