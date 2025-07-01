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

    // Language switcher
    const changeLangBtn = document.querySelector('.change-lang-btn');
    const highlightSpan = document.querySelector('.my_children .highlight');

    if (changeLangBtn && highlightSpan) {
        changeLangBtn.addEventListener('click', function () {
            if (highlightSpan.textContent.trim() === 'Children') {
                highlightSpan.textContent = 'Микрочелики';
            } else {
                highlightSpan.textContent = 'Children';
            }
        });
    }

    // Theme switcher
    const changeThemeBtn = document.querySelector('.change-theme-btn');

    if (changeThemeBtn) {
        changeThemeBtn.addEventListener('click', function () {
            document.body.classList.toggle('light-theme');

            // Update button icon
            changeThemeBtn.innerHTML = document.body.classList.contains('light-theme') ? '🌙' : '🌞';
        });
    }
});