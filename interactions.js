
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
});


    function updateContent() {
        const elements = document.getElementsByClassName("i18nelement");
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          const k = element.getAttribute("data-i18n");
          element.innerHTML = i18next.t(k);
        }
      }
      async function i18Loader() {
        const langs = ["en", "de"]; // hier können weitere sprachen hinzu
        const jsons = await Promise.all(
          langs.map((l) => fetch("languages/" + l + ".json").then((r) => r.json()))
          
          );
        const res = langs.reduce((acc, l, idx) => {
          acc[l] = { translation: jsons[idx] };
          return acc;
        }, {});
        await i18next.init({
          lng: "de",
          debug: true,
          resources: res
        });
        updateContent();
        i18next.on("languageChanged", () => {
          updateContent();
        });
        const langSelector = document.getElementById("langSelector");
        langSelector.removeAttribute("disabled");
        langSelector.addEventListener("change", (e) => {
          i18next.changeLanguage(e.target.value);
        });
      }
      
      i18Loader();

 //language-switch
async function fetchLanguageData(lang) {
    const response = await fetch(`languages/${lang}.json`);
    return response.json();
  }
  
  // Function to set the language preference
  function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
  }
  
  // Function to update content based on selected language
  function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = langData[key];
    });
  }
  
  // Function to change language
  async function changeLanguage(lang) {
    await setLanguagePreference(lang);
    
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
  }

  // Call updateContent() on page load
  window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
  })
  
 

