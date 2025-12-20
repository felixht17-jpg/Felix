 
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar-nav");
    const moreMenu = document.querySelector(".more-menu");
    const moreList = document.querySelector("#moreDropdown");

    const allItems = Array.from(
  navbar.querySelectorAll("li.nav-item:not(.more-menu):not(.has-submenu)")
);


    function updateMenu() {
        const width = window.innerWidth;

        // RESET
        allItems.forEach(i => i.style.display = "block");
        moreList.innerHTML = "";
        moreMenu.style.display = "none";

        // === DESKTOP FULL MENU ===
        if (width >= 1200) {
            return; // giữ nguyên
        }

        // === TABLET: đưa vào MORE ===
        if (width < 1200 && width >= 768) {
            moreMenu.style.display = "block";

            // 5 mục giữ lại
            const keep = allItems.slice(0, 5);
            const move = allItems.slice(5);

            move.forEach(li => {
                li.style.display = "none";

                const clone = li.cloneNode(true);
                clone.classList.remove("nav-item");
                clone.classList.add("dropdown-item");
                moreList.appendChild(clone);
            });
            return;
        }

        // === MOBILE === (Bootstrap tự xử lý)
    }

    updateMenu();
    window.addEventListener("resize", updateMenu);
});

// 🚀 FELIX SMART NAVBAR
// Auto Hide + Smart Detect + iOS Smooth
// ===============================
let lastScroll = 0;
let scrollTimeout;
const navbar = document.querySelector(".navbar-smart");

// Luôn hiện lúc khởi động
navbar.classList.add("navbar-visible");

// Xử lý cuộn
window.addEventListener("scroll", () => {
    const current = window.scrollY;

    // ====== Vuốt xuống → Ẩn ngay ======
    if (current > lastScroll && current > 80) {
        navbar.classList.remove("navbar-visible");
        navbar.classList.add("navbar-hidden");
    } 
    
    // ====== Vuốt lên → Hiện lại ======
    else {
        navbar.classList.remove("navbar-hidden");
        navbar.classList.add("navbar-visible");
    }

    lastScroll = current;

    // ====== SMART DETECT – user dừng cuộn ======
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        navbar.classList.remove("navbar-hidden");
        navbar.classList.add("navbar-visible");
    }, 800);
}, { passive: true });


// ================================
// ACTIVE LINK WHEN SCROLL
// ================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let pos = window.scrollY + 150;

    sections.forEach(sec => {
        if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
            const id = sec.getAttribute("id");
            navLinks.forEach(a => {
                a.classList.remove("active");
                if (a.getAttribute("href") === "#" + id) a.classList.add("active");
            });
        }
    });
});

// ====================================================
//  SEO TIP: Smooth Scroll (Google thích UX mượt)
// ====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
// observe từng section
sections.forEach(sec => observer.observe(sec));


// // ====================================================
// //  SEO TIP: Smooth Scroll (Google thích UX mượt)
// // ====================================================
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(e) {
//         const target = document.querySelector(this.getAttribute("href"));
//         if (!target) return;

//         e.preventDefault();
//         target.scrollIntoView({ behavior: "smooth", block: "start" });
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar-nav");
    const moreMenu = document.querySelector(".more-menu");
    const moreList = document.querySelector("#moreDropdown");

    const fullMenuItems = Array.from(navbar.querySelectorAll("li.nav-item:not(.more-menu)"));

    function updateMenu() {
        const width = window.innerWidth;

        // --- Laptop: FULL menu ---
        if (width >= 1024) {
            moreMenu.style.display = "none";

            // trả toàn bộ mục về menu chính
            moreList.innerHTML = "";
            fullMenuItems.forEach(li => li.style.display = "block");
            return;
        }

        // --- Tablet: gom vào More ---
        if (width < 1024 && width >= 768) {
            moreMenu.style.display = "block";

            const itemsToMove = fullMenuItems.slice(5); // giữ lại 5 mục đầu

            // reset trước
            moreList.innerHTML = "";

            itemsToMove.forEach(li => {
                li.style.display = "none";

                const clone = li.cloneNode(true);
                clone.classList.remove("nav-item");
                clone.classList.add("dropdown-item");

                moreList.appendChild(clone);
            });

            return;
        }

        // --- Mobile: Bootstrap xử lý, không chỉnh ---
    }

    updateMenu();
    window.addEventListener("resize", updateMenu);
});
// ================================
// NAVBAR AUTO-HIDE ON SCROLL
// ================================

// // ==========================================
// // FIX: AUTO CLOSE MOBILE MENU WHEN CLICK LINK
// // ==========================================
// document.addEventListener("DOMContentLoaded", () => {
//     const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
//     const navbarCollapse = document.getElementById("navbarNav");

//    navLinks.forEach(link => {
//     link.addEventListener("click", () => {

//         // ❌ không đóng khi click Info
//         if (link.closest(".has-submenu")) return;

//         if (navbarCollapse.classList.contains("show")) {
//             const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
//             if (bsCollapse) bsCollapse.hide();
//         }
//     });
// });

// });
function setLang(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const flagMap = {
    vi: "🇻🇳",
    en: "🇬🇧",
    ja: "🇯🇵"
  };

  document.querySelector(".flag-circle").textContent = flagMap[lang];
  localStorage.setItem("lang", lang);
  document.getElementById("langMenu").classList.remove("show");

}
// ===============================
// LANGUAGE SWITCHER
// ===============================
document.addEventListener("DOMContentLoaded", function() {
    const navbarCollapse = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle), .dropdown-item');
    
    // Khởi tạo Bootstrap Collapse instance
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    // 1. Tự động đóng menu khi chọn một mục
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
             // ❌ KHÔNG đóng menu khi bấm "Thông tin"
            if (link.classList.contains('dropdown-toggle')) {
                e.preventDefault();
                return;
            }

            if (window.innerWidth < 992) { // Chỉ đóng trên mobile
                bsCollapse.hide();
            }
        });
    });

    // 2. Xử lý đóng Language Menu khi nhấn ra ngoài
    const langToggle = document.getElementById('langToggle');
    const langMenu = document.getElementById('langMenu');

    if (langToggle && langMenu) {
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            langMenu.classList.remove('show');
        });
    }

    // 3. (Tùy chọn) Đổi màu Navbar khi cuộn trang
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar-smart');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
});
