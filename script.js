const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

        navLinks.classList.remove("active");
    });
});

window.addEventListener("scroll", () => {

    const scrollBtn = document.querySelector(".scroll-top");

    if(window.scrollY > 300){
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});