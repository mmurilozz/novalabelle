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


});