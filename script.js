document.addEventListener('DOMContentLoaded', function () {
    const mainButton = document.getElementById('mainButton');
    const dropdownPanel = document.getElementById('dropdownPanel');

    // Dropdown toggle
    mainButton.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownPanel.style.display = dropdownPanel.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown on outside click
    document.addEventListener('click', function (e) {
        if (!dropdownPanel.contains(e.target) && e.target !== mainButton) {
            dropdownPanel.style.display = 'none';
        }
    });

    // Close dropdown on "Close" button click
    document.getElementById('closeButton').addEventListener('click', function () {
        dropdownPanel.style.display = 'none';
    });

    // ====== РАБОТА С КУКАМИ ======
    // Установка cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Чтение cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // ====== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА ======
    const changeLangBtn = document.querySelector('.change-lang-btn');
    const highlightSpan = document.querySelector('.my_children .highlight');

    if (changeLangBtn && highlightSpan) {
        changeLangBtn.addEventListener('click', function () {
            if (highlightSpan.textContent.trim() === 'Children') {
                highlightSpan.textContent = 'Микрочелики';
                setCookie('app_lang', 'ru', 30);
            } else {
                highlightSpan.textContent = 'Children';
                setCookie('app_lang', 'en', 30);
            }
        });
    }

    // ====== ПЕРЕКЛЮЧЕНИЕ ТЕМЫ ======
    const changeThemeBtn = document.querySelector('.change-theme-btn');

    if (changeThemeBtn) {
        changeThemeBtn.addEventListener('click', function () {
            document.body.classList.toggle('light-theme');

            // Сохраняем текущую тему в куки
            const isLight = document.body.classList.contains('light-theme');
            setCookie('app_theme', isLight ? 'light' : 'dark', 30);

            // Меняем иконку
            changeThemeBtn.innerHTML = isLight ? '🌙' : '🌞';
        });
    }

    // ====== ВОССТАНОВЛЕНИЕ НАСТРОЕК ИЗ КУКОВ ======
    const savedTheme = getCookie('app_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        changeThemeBtn.innerHTML = '🌙';
    }

    const savedLang = getCookie('app_lang');
    if (savedLang === 'ru') {
        highlightSpan.textContent = 'Микрочелики';
    } else {
        highlightSpan.textContent = 'Children';
    }
});