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
let lang = "en";
const content = {
  en:{hero:"Shaping Future Leaders"},
  bn:{hero:"আগামী প্রজন্মের নেতৃত্ব গড়ে তুলি"}
};
function toggleLang(){
  lang = lang==="en"?"bn":"en";
  document.getElementById("heroTitle").innerText = content[lang].hero;
}

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
