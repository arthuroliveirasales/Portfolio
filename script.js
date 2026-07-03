//translate
async function changeLanguage(language) {
  const response = await fetch(`languages/${language}.json`);

  const texts = await response.json();

  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.dataset.lang;

    element.innerHTML = texts[key];
  });
}

//mobile menu
const menuBtn = document.querySelector("#menuBtn");
const menuContainer = document.querySelector(".menuContainer");

function menuView() {
  menuContainer.classList.toggle("visible");
  if (menuContainer.classList.contains("visible")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
}
