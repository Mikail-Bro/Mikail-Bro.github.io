document.addEventListener('DOMContentLoaded', function () {
    const mainButton = document.getElementById('mainButton');
    const dropdownPanel = document.getElementById('dropdownPanel');

    // button visibility switcher
    mainButton.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownPanel.style.display = dropdownPanel.style.display === 'block' ? 'none' : 'block';
    });

    // closing if click outside the panel
    document.addEventListener('click', function (e) {
        if (!dropdownPanel.contains(e.target) && e.target !== mainButton) {
            dropdownPanel.style.display = 'none';
        }
    });

    // closing if click the "Close" button
    document.getElementById('closeButton').addEventListener('click', function () {
        dropdownPanel.style.display = 'none';
    });

    // translating text "Children" <-> "Микрочелики"
    const changeLangBtn = document.querySelector('.change-lang-btn');
    const highlightSpan = document.querySelector('.my_children .highlight');

    if (changeLangBtn && highlightSpan) {
        changeLangBtn.addEventListener('click', function() {
            if (highlightSpan.textContent.trim() === 'Children') {
                highlightSpan.textContent = 'Микрочелики';
            } else {
                highlightSpan.textContent = 'Children';
            }
        });
    }

    // color theme changing
    const changeThemeBtn = document.querySelector('.change-theme-btn');

    if (changeThemeBtn) {
        changeThemeBtn.addEventListener('click', function () {
            document.body.classList.toggle('light-theme');

            // change the label on the button
            if (document.body.classList.contains('light-theme')) {
                changeThemeBtn.innerHTML = '🌙';
            } else {
                changeThemeBtn.innerHTML = '🌞';
            }
        })
    }
});