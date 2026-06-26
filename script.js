async function changeLanguage(language) {

    const response = await fetch(`languages/${language}.json`);

    const texts = await response.json();

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.dataset.lang;

        element.textContent = texts[key];
    });
}

