/* =========================================================
   ABHIJIT PAWAR PORTFOLIO
   JAVASCRIPT
========================================================= */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});



/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menu-btn");

const nav =
    document.getElementById("nav-menu");


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    const icon =
        menuBtn.querySelector("i");

    if (nav.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking link */

document
    .querySelectorAll("#nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });



/* ================= TYPING EFFECT ================= */

const roles = [

    "Data Analyst",

    "Data Scientist",

    "AI Engineer",

    "ML Engineer",

    "Python Developer",

    "Software Developer",

    "Full Stack Developer",

    "BI / Power BI Developer"

];


const typingText =
    document.getElementById("typing-text");


let roleIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1700
            );

            return;

        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1)
                % roles.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 85
    );

}


typeEffect();



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("active");

                    revealObserver
                        .unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* ================= BACK TO TOP ================= */

const topBtn =
    document.getElementById("top-btn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(4, 12, 24, 0.94)";

    } else {

        navbar.style.background =
            "rgba(5, 14, 27, 0.78)";

    }

});



/* ================= CARD TILT ================= */

const cards =
    document.querySelectorAll(
        ".expertise-card, .project-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 900)
                return;


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) * -2;


            const rotateY =
                ((x - centerX) /
                    centerX) * 2;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-7px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});



/* ================= ACTIVE NAV LINK ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        "#nav-menu a"
    );


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >=
            sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});