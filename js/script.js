/* ========= NOTICE DATA (BN / EN) ========= */
const notices = {
  en: [
    "📢 Admission Open for 2026",
    "🏫 New Academic Session Starts Soon",
    "🎓 SSC Result: 100% Pass"
  ],
  bn: [
    "📢 ২০২৬ সালের ভর্তি কার্যক্রম শুরু",
    "🏫 নতুন শিক্ষাবর্ষ শীঘ্রই শুরু",
    "🎓 এসএসসি ফলাফল: ১০০% পাশ"
  ]
};

const noticeText = document.querySelector(".notice-text");

/* ========= LANGUAGE TOGGLE ========= */
let currentLang = "en";
const langBtn = document.getElementById("langToggle");

function updateLanguage() {
  /* text translate */
  document.querySelectorAll("[data-bn]").forEach(el => {
    el.innerText = el.dataset[currentLang];
  });

  /* notice update */
  if (noticeText && notices[currentLang]) {
    noticeText.innerText = notices[currentLang].join(" | ");
  }

  document.documentElement.lang = currentLang;
}

if (langBtn) {
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "bn" : "en";
    updateLanguage();
  });
}

/* initial load */
updateLanguage();

/* ========= GALLERY LIGHTBOX ========= */
const imgs = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightbox-img");

if (imgs.length && lightbox && lightImg) {
  imgs.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

/* ========= FORM LOCAL STORAGE ========= */
const forms = document.querySelectorAll("form");

if (forms.length) {
  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const data = {};
      [...form.elements].forEach(el => {
        if (el.name) data[el.name] = el.value;
      });

      localStorage.setItem("lastForm", JSON.stringify(data));
      alert(currentLang === "bn" ? "ফরম জমা দেওয়া হয়েছে!" : "Form Submitted!");
      form.reset();
    });
  });
}
