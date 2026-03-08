/* ===== MOBILE MENU ===== */
const toggle=document.querySelector(".menuToggle");
const menu=document.querySelector(".menu");
toggle.onclick=()=>menu.classList.toggle("show");

/* ===== BACK TO TOP ===== */
const topBtn=document.getElementById("topBtn");
window.onscroll=()=>topBtn.style.display=(window.scrollY>300)?"block":"none";
topBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

/* ===== LANGUAGE SWITCH ===== */
const langBtn=document.getElementById("langBtn");
let currentLang=localStorage.getItem("lang")||"bn";
function applyLanguage(lang){
  document.querySelectorAll("[data-bn]").forEach(el=>{
    el.innerText=el.dataset[lang];
  });
  langBtn.innerText=(lang==="bn")?"EN":"BN";
  localStorage.setItem("lang",lang);
}
applyLanguage(currentLang);
langBtn.onclick=()=>{
  currentLang=(currentLang==="bn")?"en":"bn";
  applyLanguage(currentLang);
};

/* ===== SLIDER FUNCTION ===== */
function createSlider(wrapper){
  const slider=wrapper.querySelector(".slider");
  const cards=[...slider.children];
  const prev=wrapper.querySelector(".prev");
  const next=wrapper.querySelector(".next");
  let index=0;
  function cardWidth(){return cards[0].offsetWidth+20;}
  cards.slice(0,3).forEach(card=>slider.appendChild(card.cloneNode(true)));
  function move(dir){
    index+=dir;
    slider.style.transition="transform 0.6s ease";
    slider.style.transform=`translateX(${-cardWidth()*index}px)`;
    if(index>=cards.length){
      setTimeout(()=>{slider.style.transition="none"; index=0; slider.style.transform=`translateX(0)`;},600);
    }
  }
  next.onclick=()=>move(1);
  prev.onclick=()=>move(-1);
  let auto=setInterval(()=>move(1),3500);
  wrapper.addEventListener("mouseenter",()=>clearInterval(auto));
  wrapper.addEventListener("mouseleave",()=>{auto=setInterval(()=>move(1),3500);});
}
document.querySelectorAll(".sliderWrapper").forEach(createSlider);

/* ===== SCROLL REVEAL ===== */
if(window.ScrollReveal){
  ScrollReveal().reveal('.sectionFade',{distance:'50px',duration:800,interval:200,origin:'bottom',opacity:0});
}