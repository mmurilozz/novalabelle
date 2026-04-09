// DOM JS

document.addEventListener('DOMContentLoaded', () => {

    // objeto no html (ícone sol ou lua)
    const toggleTheme = document.getElementById('toggleTheme');
    const rootHtml = document.documentElement;
    // Var para menu Hamburger
    const menuHamburger = document.getElementById('menuHamburger');
    // Estrutura do menu
    const menuMobile = document.getElementById('menuMobile');
    // Verificação ou condição
    const icon = menuHamburger?.querySelector('i');
    /* todas as classes menu-link do HTML */
    const menuLinks = document.querySelectorAll ('.menu-link');


    // Função mudar a cor do tema
    function changeTheme() {
        const currentTheme = rootHtml.getAttribute('data-theme');
        const isDark = currentTheme === 'dark';

        rootHtml.setAttribute('data-theme', isDark ? 'light' : 'dark');
        //troca do icone 
        toggleTheme.classList.toggle('bi-sun', !isDark);
        toggleTheme.classList.toggle('bi-moon', isDark);
    }

    if (toggleTheme) {
        toggleTheme.addEventListener('click', changeTheme);
    }

    /* Alternar menu mobile e ícone */
    function toggleMenu() {
        /* lista NAV */
        const isOpen = menuMobile.classList.toggle('active');
        //condição
        if (icon) {
            icon.classList.toggle('bi-list', !isOpen);
            icon.classList.toggle('bi-x-lg', isOpen);
        }
    }
    
    if (menuHamburger) {
        menuHamburger.addEventListener('click', toggleMenu);
    }

    /* Ativar link clicado == menu */
    menuLinks.forEach (item => {
    item.addEventListener('click', () => {
        menuLinks.forEach (i => i.classList.remove('active'));
        item.classList.add('active');
    });        
    });

});