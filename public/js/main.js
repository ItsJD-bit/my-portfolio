document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio initialized.");


    /*
     * PAGE TRANSITION
     */

    const transition =
        document.querySelector(".page-transition");


    if (transition) {

        transition.addEventListener(
            "animationend",
            () => {

                transition.classList.add("finished");

            }
        );

    }


    /*
     * PAGE EXIT
     */

    const links =
        document.querySelectorAll("a[href]");


    links.forEach(link => {

        link.addEventListener("click", (event) => {

            const url =
                link.getAttribute("href");


            if (
                !url ||
                url.startsWith("#") ||
                url.startsWith("mailto:") ||
                url.startsWith("http") ||
                link.target === "_blank"
            ) {

                return;

            }


            event.preventDefault();


            if (transition) {

                transition.classList.remove(
                    "finished"
                );

                transition.classList.add(
                    "leaving"
                );

            }


            setTimeout(() => {

                window.location.href = url;

            }, 650);

        });

    });



    /*
     * SCROLL REVEAL
     */

    const revealElements =
        document.querySelectorAll(
            ".intro, .projects-preview, .contact-preview, .about-content, .skills-section, .project-card, .project-detail-content, .project-information, .project-features, .contact-details"
        );


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        observer.unobserve(
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

    element.classList.add("reveal");

    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight) {

        element.classList.add("revealed");

    } else {

        observer.observe(element);

    }

});
});

/*
 * CUSTOM CURSOR
 */

const cursor =
    document.querySelector(".custom-cursor");


if (cursor) {

    document.addEventListener(
        "mousemove",
        (event) => {

            cursor.style.left =
                `${event.clientX}px`;

            cursor.style.top =
                `${event.clientY}px`;

        }
    );


    const interactiveElements =
        document.querySelectorAll(
            "a, button, .project-card, .project-item"
        );


    interactiveElements.forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursor.classList.add(
                    "hovering"
                );

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursor.classList.remove(
                    "hovering"
                );

            }
        );

    });

}