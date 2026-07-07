// MM Builders Premium Website Script

// Smooth scroll
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });
}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

// Highlight active menu
window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    document.querySelectorAll(".navbar a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Welcome message
window.addEventListener("load", () => {

    console.log("Welcome to MM Builders");

    setTimeout(() => {
        alert("🙏 Welcome to MM Builders\nBuilding Dreams with Quality & Trust");
    }, 500);

});});

// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to MM Builders Website");
});
