/* ========= NOTICE DATA ========= */
const notices = [
  "📢 Admission Open for 2026",
  "🏫 New Academic Session Starts Soon",
  "🎓 SSC Result: 100% Pass"
];
const noticeText = document.querySelector(".notice-text");
if(noticeText){
  noticeText.innerText = notices.join(" | ");
}

/* ========= LANGUAGE TOGGLE ========= */
let currentLang = "en";

document.getElementById("langToggle").onclick = () => {
    currentLang = currentLang === "en" ? "bn" : "en";

    document.querySelectorAll("[data-bn]").forEach(el => {
        el.innerText = el.dataset[currentLang];
    });

    document.documentElement.lang = currentLang;
};


/* ========= LIGHTBOX ========= */
const imgs = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightbox-img");
imgs.forEach(img=>{
  img.onclick=()=>{
    lightbox.style.display="flex";
    lightImg.src=img.src;
  }
});
if(lightbox){
  lightbox.onclick=()=>lightbox.style.display="none";
}

/* ========= FORM STORAGE ========= */
document.querySelectorAll("form").forEach(f=>{
  f.addEventListener("submit",e=>{
    e.preventDefault();
    let data = {};
    [...f.elements].forEach(el=>{
      if(el.name) data[el.name]=el.value;
    });
    localStorage.setItem("lastForm",JSON.stringify(data));
    alert("Form Submitted!");
    f.reset();
  });
});
