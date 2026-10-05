document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       WELCOME SCREEN
    ========================================= */

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const enterPortfolio =
        document.getElementById("enterPortfolio");


    if (welcomeScreen && enterPortfolio) {

        document.body.style.overflow = "hidden";

        enterPortfolio.addEventListener("click", () => {

            welcomeScreen.classList.add("hide");

            setTimeout(() => {

                document.body.classList.add(
                    "portfolio-loaded"
                );

            }, 250);

            setTimeout(() => {

                document.body.style.overflow = "";

            }, 1300);

        });

    }


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

        });


        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

            });

        });

    }


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            revealObserver.unobserve(
                                entry.target
                            );

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

    } else {

        revealElements.forEach(element => {

            element.classList.add("show");

        });

    }


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =========================================
       HERO MOUSE EFFECT — DISABLED
       (elemen tidak bergerak saat cursor digerakkan)
    ========================================= */

    // Mouse parallax dihapus supaya elemen tidak bergerak

 /* =========================================
   PHOTO SLIDER - FADE
========================================= */

const slides = document.querySelectorAll(".profile-photo.slider .slide");

let slideIndex = 0;

if (slides.length > 1) {

    slides[0].classList.add("active");

    setInterval(() => {

        slides[slideIndex].classList.remove("active");

        slideIndex++;

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        slides[slideIndex].classList.add("active");

    }, 7000); // ganti foto setiap 7 detik
}
});
