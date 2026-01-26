// Notice Auto Scroll
let noticeText = document.getElementById("noticeText");
if (noticeText) {
    let pos = 0;
    setInterval(() => {
        pos--;
        noticeText.style.transform = `translateX(${pos}px)`;
    }, 30);
}

// Form Submit
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Submitted Successfully!");
        form.reset();
    });
});
