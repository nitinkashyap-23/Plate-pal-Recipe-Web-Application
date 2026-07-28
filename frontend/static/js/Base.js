// scroll effect
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const icon = document.getElementById("icon");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        icon.classList.replace("fa-xmark","fa-bars");
    } else {
        menu.style.display = "flex";
        icon.classList.replace("fa-bars","fa-xmark");
    }
}
