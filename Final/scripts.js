document.addEventListener('DOMContentLoaded', function () {
    const localNavToggle = document.getElementById('localNavToggle');
    const localNavMenu = document.getElementById('localNavMenu');

    function toggleMenu() {
        if (localNavMenu.style.display === 'block') {
            localNavMenu.style.display = 'none';
        } else {
            localNavMenu.style.display = 'block';
        }
    }

    function closeMenu(event) {
        // Verhindert das Schließen des Menüs, wenn auf das Menü selbst geklickt wird
        if (event.target === localNavMenu || localNavMenu.contains(event.target)) {
            return;
        }
        localNavMenu.style.display = 'none';
    }

    function setupEventListeners() {
        localNavToggle.addEventListener('click', function (event) {
            event.stopPropagation(); // Verhindert das Schließen des Menüs bei Klick auf den Toggle-Button
            toggleMenu();
        });

        // Schließt das Menü, wenn außerhalb geklickt wird
        document.addEventListener('click', closeMenu);

        // Verhindert das Schließen, wenn auf das Menü geklickt wird
        localNavMenu.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }

    setupEventListeners();
});

document.addEventListener('DOMContentLoaded', function () {
    // Erkennen der Browsersprache
    const userLang = navigator.language || navigator.userLanguage;
    const rtlLangs = ['ar', 'he', 'fa'];

    if (rtlLangs.includes(userLang.split('-')[0])) {
        document.body.classList.add('rtl');  
    } else {
        document.body.classList.add('ltr');  
    }
});


