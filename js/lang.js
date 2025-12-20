
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("langToggle");
  const menu = document.getElementById("langMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  }

  const lang = localStorage.getItem("lang") || "ja";
    window.currentLang = lang; 
  setLang(lang);
});
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "ja";
  setLang(lang);
});

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "ja";
  setLang(lang);
});

function setLang(lang) {
  window.currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-translate-key]").forEach(el => {
    const key = el.dataset.translateKey;
    if (translations[lang]?.[key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const flagMap = { ja: "🇯🇵", en: "🇬🇧", vi: "🇻🇳" };
  document.querySelector(".flag-circle").textContent = flagMap[lang];

  if (window.renderProducts) {
    window.renderProducts(window.currentTab || "sim");
  }
}



document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar-collapse");
  if (!navbar) return;

  // tất cả link trong menu
  const navLinks = navbar.querySelectorAll("a.nav-link, .dropdown-item");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("show")) {
        bootstrap.Collapse
          .getOrCreateInstance(navbar)
          .hide();
      }
    });
  });
});




