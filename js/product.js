/* ====================================
   HÀM RENDER PRODUCT (Cần window.currentLang)
==================================== */
/* ====================================
   HÀM RENDER PRODUCT (Cần window.currentLang)
==================================== */
function renderProducts(tab = "sim") {
    const track = document.getElementById("product-track");
    if (!track) return;

    // Sử dụng currentLang đã được thiết lập bởi setLang
    const lang = window.currentLang || "ja";

    // Lọc sản phẩm dựa trên tab
    const data = products.filter(p =>
        tab === "device"
            ? p.category.startsWith("wifi")
            : p.category.startsWith("sim")
    );

    track.innerHTML = data.map(p => {
        const t = p.text[lang] || p.text.ja;

        let saleHTML = "";
        if (p.originalPrice) {
            // Loại bỏ ký tự không phải số và chuyển sang số nguyên để tính toán
            const o = parseInt(p.originalPrice.replace(/\D/g, ""));
            const n = parseInt(p.price.replace(/\D/g, ""));
            // Tính phần trăm giảm giá (đảm bảo không chia cho 0)
            const discount = o > 0 ? Math.round((1 - n / o) * 100) : 0;
            saleHTML = `<span class="badge-sale">-${discount}%</span>`;
        }

        return `
            <div class="product-slide">
                <div class="product-card">
                    <div class="card-image">
                        ${saleHTML}
                        <img src="${p.image}" alt="${t.name}">
                    </div>
                    <div class="card-body">
                        <span class="provider">${p.provider}</span>
                        <h3 class="product-title">${t.name}</h3> <p class="product-desc">${t.desc}</p>     <ul class="feature-list"> ${t.features.map(f => `<li>✔ ${f}</li>`).join("")}
                        </ul>
                        <div class="price-box"> ${p.originalPrice ? `<span class="price-old">${p.originalPrice}</span>` : ""} <span class="price-new">${p.price}</span> </div>
                        <button class="btn-buy">${t.btn}</button> </div>
                </div>
            </div>
        `;
    }).join("");

    // Sau khi render xong, cần gọi lại buildIndicators và updateSlide
    // Cần phải có kiểm tra này vì chúng ta định nghĩa các hàm bên ngoài DOMContentLoaded
    if (window.buildIndicators && window.updateSlide) {
        window.currentIndex = 0; // Reset index khi chuyển tab
        window.buildIndicators();
        window.updateSlide();
    }
}
window.renderProducts = renderProducts; // Cần export hàm này

/* ====================================
   HÀM SLIDER - ĐỊNH NGHĨA NGOÀI DOMContentLoaded
   (Sử dụng các biến global: track, perPage, currentIndex, nextBtn, prevBtn, indicatorWrap)
==================================== */

// Hàm chính để cập nhật vị trí trượt
function updateSlide() {
    const track = document.getElementById("product-track");
    if (!track) return;
    const slides = track.children;
    const slidesCount = slides.length;
    const indicatorWrap = document.querySelector(".slider-indicators");
    
    const perPage = window.perPage || 3; 
    
    // Ẩn/Hiện nút điều hướng
    const pages = Math.ceil(slidesCount / perPage);
    const showControls = pages > 1;

    const prevBtn = document.querySelector(".slide-btn.prev");
    const nextBtn = document.querySelector(".slide-btn.next");

    if (prevBtn) prevBtn.style.display = showControls ? '' : 'none';
    if (nextBtn) nextBtn.style.display = showControls ? '' : 'none';
    if (indicatorWrap) indicatorWrap.style.display = showControls ? 'flex' : 'none';

    if (slidesCount === 0) return;

    // LẤY CHIỀU RỘNG ĐỘNG (Bao gồm margin-right)
    const slideStyle = window.getComputedStyle(slides[0]);
    const slideMarginRight = parseFloat(slideStyle.marginRight) || 0; 
    const width = slides[0].offsetWidth + slideMarginRight; 
    
    // Đảm bảo currentIndex không vượt quá giới hạn
    const maxIndex = Math.max(0, slidesCount - perPage);
    if (window.currentIndex > maxIndex) {
        window.currentIndex = maxIndex;
    }

    track.style.transform = `translateX(${-window.currentIndex * width}px)`;

    // 🔥 SỬA LỖI: Chuyển đổi slides (HTMLCollection) thành Array
    [...slides].forEach((s, i) => {
        s.classList.toggle("is-active",
            i >= window.currentIndex && i < window.currentIndex + perPage
        );
    });

    if (window.updateIndicators) {
        window.updateIndicators();
    }
}
window.updateSlide = updateSlide; 

function next() {
    const track = document.getElementById("product-track");
    if (!track) return;
    const slides = track.children;
    if (slides.length === 0) return;
    
    const perPage = window.perPage || 3; 

    const max = slides.length - perPage;
    if (window.currentIndex < max) window.currentIndex++;
    else window.currentIndex = 0; 
    updateSlide();
}
window.next = next; 

function prev() {
    const track = document.getElementById("product-track");
    if (!track) return;
    const slides = track.children;
    if (slides.length === 0) return;
    
    const perPage = window.perPage || 3; 

    const maxIndex = slides.length - perPage;
    if (window.currentIndex > 0) window.currentIndex--;
    else window.currentIndex = Math.max(0, maxIndex); 
    updateSlide();
}
window.prev = prev; 


function buildIndicators() {
    const track = document.getElementById("product-track");
    if (!track) return;
    const slidesCount = track.children.length;
    const perPage = window.perPage || 3; 
    
    // Tìm hoặc tạo indicatorWrap
    let indicatorWrap = document.querySelector(".slider-indicators");
    if (!indicatorWrap) {
        // Cần đảm bảo logic tạo wrapper không tạo lỗi null (vì đã kiểm tra track ở trên)
        indicatorWrap = document.createElement("div");
        indicatorWrap.className = "slider-indicators";
        track.parentElement.appendChild(indicatorWrap);
    }

    indicatorWrap.innerHTML = "";
    const pages = Math.ceil(slidesCount / perPage);
    indicatorWrap.style.display = pages <= 1 ? 'none' : 'flex';

    for (let i = 0; i < pages; i++) {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.addEventListener("click", () => {
            window.isUserInteracting = true;
            if (window.stopAuto) window.stopAuto(); 
            window.currentIndex = i * perPage;
            window.updateSlide();
        });
        indicatorWrap.appendChild(dot);
    }
    window.updateIndicators();
}
window.buildIndicators = buildIndicators; 

function updateIndicators() {
    const indicatorWrap = document.querySelector(".slider-indicators");
    if (!indicatorWrap) return;

    const dots = indicatorWrap.children;
    const perPage = window.perPage || 3; 
    const page = Math.floor(window.currentIndex / perPage);
    // 🔥 SỬA LỖI: Chuyển đổi dots (HTMLCollection) thành Array
    [...dots].forEach((d, i) =>
        d.classList.toggle("active", i === page)
    );
}
window.updateIndicators = updateIndicators; 


/* ====================================
   HÀM THIẾT LẬP NGÔN NGỮ (Giữ nguyên)
==================================== */
function setLang(lang) {
    if (typeof translations === 'undefined' || !translations[lang]) return;

    window.currentLang = lang;
    localStorage.setItem("lang", lang);

    // DỊCH TEXT TĨNH 
    document.querySelectorAll("[data-translate-key]").forEach(el => {
        if (el.closest("#product-track")) return;
        const key = el.dataset.translateKey;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // flag
    const flagMap = { ja: "🇯🇵", en: "🇬🇧", vi: "🇻🇳" };
    const textMap = { ja: "JP", en: "EN", vi: "VN" };

    const flagCircle = document.querySelector(".flag-circle");
    const langText = document.querySelector(".lang-text");

    if (flagCircle) flagCircle.textContent = flagMap[lang];
    if (langText) langText.textContent = textMap[lang];


    // RENDER LẠI PRODUCT
    if (window.renderProducts) {
        window.renderProducts(window.currentTab || "device"); 
    }
}
window.setLang = setLang;


/* ====================================
   KHỐI KHỞI TẠO CHÍNH (ĐÃ TỐI ƯU HÓA)
==================================== */
/* ====================================
   KHỐI KHỞI TẠO CHÍNH (ĐÃ TỐI ƯU HÓA VÀ DI CHUYỂN BIẾN)
==================================== */
document.addEventListener("DOMContentLoaded", () => {
    
    /* ======================
        STATE BAN ĐẦU (DI CHUYỂN LÊN ĐẦU)
    ====================== */
    window.currentTab = "device"; 
    window.currentIndex = 0;
    window.perPage = window.innerWidth <= 768 ? 1 : 3;
    window.autoTimer = null;
    window.isUserInteracting = false;
    // Đảm bảo hàm này được định nghĩa trước khi nó được gọi trong các sự kiện click
    window.stopAuto = () => { clearInterval(window.autoTimer); window.autoTimer = null; };


    // TẠO LẠI CÁC BIẾN DOM
    const track = document.getElementById("product-track");
    const tabs = document.querySelectorAll("[data-tab]");
    const prevBtn = document.querySelector(".slide-btn.prev");
    const nextBtn = document.querySelector(".slide-btn.next");
    const sliderWrapper = track ? track.parentElement : null;

    // Thoát nếu không tìm thấy cấu trúc cơ bản
    if (!track || !sliderWrapper) return;

    // TẠO INDICATOR WRAPPER
    let indicatorWrap = document.querySelector(".slider-indicators");
    if (!indicatorWrap) {
         indicatorWrap = document.createElement("div");
         indicatorWrap.className = "slider-indicators";
         const sliderControls = sliderWrapper.querySelector(".slider-controls");
         if (sliderControls) {
            sliderWrapper.insertBefore(indicatorWrap, sliderControls.nextSibling);
         } else {
             sliderWrapper.appendChild(indicatorWrap);
         }
    }

    /* ======================
        KHỞI TẠO NGÔN NGỮ & RENDER LẦN ĐẦU
    ====================== */
    const initialLang = localStorage.getItem("lang") || "ja";
    window.currentLang = initialLang;
    // Chỉ gọi setLang nếu translations đã được định nghĩa
    if (typeof translations !== 'undefined' && window.setLang) {
        window.setLang(initialLang); 
    }


    /* ======================
        GÁN SỰ KIỆN CHO NÚT ĐIỀU HƯỚNG (Bây giờ stopAuto đã được định nghĩa)
    ====================== */
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            window.isUserInteracting = true;
            window.stopAuto(); // OK
            window.next();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            window.isUserInteracting = true;
            window.stopAuto(); // OK
            window.prev();
        });
    }

// ... (các phần khác như MOBILE SWIPE, SỰ KIỆN CHUYỂN TAB, RESPONSIVE, NAV COLLAPSE)
    
    /* ======================
        MOBILE SWIPE
    ====================== */
    let startX = 0;
    track.addEventListener("touchstart", e => {
        window.isUserInteracting = true;
        window.stopAuto();
        startX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", e => {
        const dx = e.changedTouches[0].clientX - startX;
        if (dx < -40) window.next();
        if (dx > 40) window.prev();
    });


  /* ======================
        SỰ KIỆN CHUYỂN TAB
    ====================== */
  if (tabs.length > 0) {
        tabs.forEach(btn => {
            btn.addEventListener("click", () => {
                tabs.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                window.currentTab = btn.dataset.tab;
                
                if (window.renderProducts) {
                    window.renderProducts(window.currentTab);
                }
            });
        });
    }
    /* ======================
        RESPONSIVE
    ====================== */
    window.addEventListener("resize", () => {
        window.perPage = window.innerWidth <= 768 ? 1 : 3; 
        window.currentIndex = 0;
        window.updateSlide();
        window.buildIndicators();
    });

    // Chạy lần cuối sau khi DOMContentLoaded hoàn thành
    window.buildIndicators();
    window.updateSlide(); 

/* ====================== FIX MENU MOBILE ====================== */
const navbar = document.querySelector(".navbar-collapse");
if (navbar) {
    // Chỉ chọn các link không phải là nút mở menu con
    const navLinks = navbar.querySelectorAll("a.nav-link:not(.dropdown-toggle), .dropdown-item");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Chỉ đóng menu chính khi người dùng nhấn vào các link thực sự để chuyển trang/mục
            if (navbar.classList.contains("show")) {
                if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
                    bootstrap.Collapse
                        .getOrCreateInstance(navbar)
                        .hide();
                }
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (!navbarCollapse) return;

    // Chọn tất cả link, TRỪ nút có mũi tên xổ xuống (dropdown-toggle)
    const linksToCloseMenu = navbarCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item');

    linksToCloseMenu.forEach(link => {
        link.addEventListener('click', () => {
            // Kiểm tra nếu đang ở màn hình Mobile và menu đang mở
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});
}); 
// document.addEventListener("DOMContentLoaded", () => {
//     const productTrack = document.getElementById('product-track');
//     const indicatorsContainer = document.getElementById('slider-indicators');
//     const cards = productTrack ? productTrack.getElementsByClassName('product-card') : [];
    
//     if (!productTrack || cards.length === 0) return;

//     // --- Logic Cập nhật Indicators khi Vuốt ---
//     const updateIndicators = () => {
//         const scrollLeft = productTrack.scrollLeft;
//         const cardWidth = productTrack.clientWidth;
        
//         // Tính toán chỉ số của thẻ hiện tại
//         const currentCardIndex = Math.round(scrollLeft / cardWidth);
        
//         // Cập nhật trạng thái 'active' cho chấm tròn
//         Array.from(indicatorsContainer.children).forEach((indicator, index) => {
//             indicator.classList.remove('active');
//             if (index === currentCardIndex) {
//                 indicator.classList.add('active');
//             }
//         });
//     };

//     // 1. Kích hoạt Vuốt (Swipe) trên Mobile
//     // Do đã dùng CSS: scroll-snap-type: x mandatory, 
//     // trình duyệt đã tự xử lý việc dừng đúng slide khi vuốt,
//     // ta chỉ cần lắng nghe sự kiện cuộn (scroll) để cập nhật indicator.

//     productTrack.addEventListener('scroll', updateIndicators);
    
//     // Cập nhật lần đầu
//     setTimeout(updateIndicators, 100); 

//     // --- Giữ lại/Tái tạo logic Click cho Desktop (nếu cần) ---

//     // *QUAN TRỌNG: Nếu bạn có sẵn logic xử lý click cho nút prev/next, 
//     // bạn cần đảm bảo nó KHÔNG chạy trên mobile*
    
//     const prevButton = document.querySelector('.slide-btn.prev');
//     const nextButton = document.querySelector('.slide-btn.next');

//     // Chỉ đính kèm sự kiện click cho nút nếu KHÔNG phải mobile (sử dụng kích thước màn hình)
//     if (prevButton && nextButton && window.innerWidth >= 768) {
        
//         // Logic cho nút NEXT
//         nextButton.addEventListener('click', () => {
//             // Tính toán vị trí cuộn tiếp theo
//             const currentScroll = productTrack.scrollLeft;
//             const cardWidth = productTrack.clientWidth;
            
//             // Cuộn sang slide kế tiếp
//             productTrack.scroll({
//                 left: currentScroll + cardWidth,
//                 behavior: 'smooth'
//             });
//         });

//         // Logic cho nút PREV
//         prevButton.addEventListener('click', () => {
//             // Tính toán vị trí cuộn trước đó
//             const currentScroll = productTrack.scrollLeft;
//             const cardWidth = productTrack.clientWidth;

//             // Cuộn sang slide trước đó
//             productTrack.scroll({
//                 left: currentScroll - cardWidth,
//                 behavior: 'smooth'
//             });
//         });
//     }
// });// Kết thúc DOMContentLoaded