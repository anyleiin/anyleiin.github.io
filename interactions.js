
document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('mouseSwiper');

    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);

// language-switch
    async function fetchLanguageData(lang) {
    const response = await fetch(`languages/${lang}.json`);
   
    return response.json();
    }
    function setLanguagePreference(lang) {
        localStorage.setItem('language', lang);
        location.reload();
    }
    function updateContent(langData) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = langData[key];
        });
    }

    async function changeLanguage(lang) {
        await setLanguagePreference(lang);
        
        const langData = await fetchLanguageData(lang);
        updateContent(langData);
        //toggleArabicStylesheet(lang); // Toggle Arabic stylesheet
    }

    window.addEventListener('DOMContentLoaded', async () => {
        const userPreferredLanguage = localStorage.getItem('language') || 'en';
        const langData = await fetchLanguageData(userPreferredLanguage);
        updateContent(langData);
        //toggleArabicStylesheet(userPreferredLanguage);
    });
});