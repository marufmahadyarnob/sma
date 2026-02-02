/* ==============================
   GLOBAL LANGUAGE STATE
================================ */
let currentLang = "en";

/* ==============================
   LANGUAGE UPDATE FUNCTION
================================ */
function updateLanguage() {
    // All text translate
    document.querySelectorAll("[data-bn]").forEach(el => {
        el.innerText = el.dataset[currentLang];
    });

    // Notice update
    const noticeText = document.querySelector(".notice-text");
    if (noticeText) {
        noticeText.innerText =
            currentLang === "bn"
                ? "📢 ২০২৬ সালের ভর্তি কার্যক্রম শুরু | 🏫 নতুন শিক্ষাবর্ষ শীঘ্রই শুরু | 🎓 এসএসসি ফলাফল: ১০০% পাশ"
                : "📢 Admission Open for 2026 | 🏫 New Academic Session Starts Soon | 🎓 SSC Result: 100% Pass";
    }

    document.documentElement.lang = currentLang;
}

/* ==============================
   LANGUAGE TOGGLE BUTTON
================================ */
const langBtn = document.getElementById("langToggle");
if (langBtn) {
    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "bn" : "en";
        updateLanguage();
    });
}

/* Initial load */
updateLanguage();

/* ==============================
   NOTICE AUTO SLIDE (OPTIONAL)
================================ */
const noticeBar = document.querySelector(".notice-bar");
if (noticeBar) {
    let offset = 0;
    setInterval(() => {
        offset -= 1;
        noticeBar.style.backgroundPosition = offset + "px 0";
    }, 40);
}

/* ==============================
   GALLERY LIGHTBOX
================================ */
const galleryImgs = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (galleryImgs.length && lightbox && lightboxImg) {
    galleryImgs.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

/* ==============================
   FORM LOCAL STORAGE
================================ */
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const data = {};
        [...form.elements].forEach(el => {
            if (el.name) data[el.name] = el.value;
        });

        localStorage.setItem("lastForm", JSON.stringify(data));
        alert(currentLang === "bn" ? "ফরম সফলভাবে জমা দেওয়া হয়েছে!" : "Form submitted successfully!");
        form.reset();
    });
});
