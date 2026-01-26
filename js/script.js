// Button Action
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
});

// Form Handling
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Form Submitted Successfully!");
        form.reset();
    });
});
