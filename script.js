document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    // Update ScrollTrigger on scroll
    locoScroll.on("scroll", ScrollTrigger.update);

    // Set up ScrollTrigger proxy for Locomotive Scroll
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const fullScr = document.getElementById('full-scr');

    menuIcon.addEventListener('click', () => {
        gsap.to(fullScr, {
            y: "0%",
            visibility: "visible",
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: () => {
                // Animation to execute after the first animation completes
                gsap.to(".us", {
                    opacity: 1,
                    stagger: 0.3,
                    scale: 1,
                    rotate: "0",
                    duration: 0.8,
                });
            }
        });
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';


    });

    closeIcon.addEventListener('click', () => {
        gsap.to(fullScr, {
            y: "-100%",
            visibility: "visible",
            duration: 1.5,
            ease: "power2.inOut",
            onComplete: () => {
                // Animation to execute after the first animation completes
                gsap.to(".us", {
                    opacity: 0,

                });
            }
        });
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    });

    var tl10 = gsap.timeline();
// Shery mouseFollower configuration
    Shery.mouseFollower({
        skew: 2,
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        duration: 0.5,
    });

    // GSAP Animation for first page
    var tl = gsap.timeline();
    tl.from("nav", {
        opacity: 0,
        delay: 0.3,
        duration: 1.4,
        ease: "power2.inOut",
    }, 'a')
    tl.from("#first_page h1", {
        opacity: 0,
        delay: 0.3,
        ease: "power2.inOut",
        duration: 1.4,
    }, 'a')
    tl.from("#img3, #img2, #img1", {
        y: -160,
        opacity: 0,
        stagger: 0.4,
        duration: 0.4,
    });

    // Magnetic effect using Shery
    Shery.makeMagnet("#img1, #img2, #img3", {
        ease: "cubic-bezier(0.23, 1, 0.32, 1)",
        duration: 1,
    });

    // GSAP animation for the second page
    gsap.to("#second_page", {
        scrollTrigger: {
            trigger: "#second_page",
            start: "top 30%",
            scroller: "#main",
            scrub: 4,
            end: "top 0%",
        },
        duration: 4,
        clipPath: "circle(150% at 50% 100%)"
    });

    gsap.from(".rightpart", {
        x: 520,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: "#second_page",
            start: "top 10%",
            scroller: "#main",
            end: "top 0%",
        },
    }, 'b')

    gsap.from(".leftpart", {
        x: -520,
        opacity: -0.5,
        duration: 0.8,
        scrollTrigger: {
            trigger: "#second_page",
            start: "top 10%",
            scroller: "#main",
            end: "top 0%",
        },
    }, 'b')

    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#third_page",
            start: "top 20%",
            scroller: "#main",
            scrub: 1.5,
            end: "top 0%",
        }
    });

    tl4.fromTo("#third_left", {
        clipPath: "circle(10% at 50% 50%)" // Small circle at the left
    }, {
        duration: 3,
        clipPath: "circle(75% at 50% 50%)" // Larger circle centered
    });

    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#third_page",
            start: "top 20%",
            scroller: "#main",
            scrub: 1.5,
            end: "top 0%",
        }
    });

    tl5.fromTo("#third_right", {
        clipPath: "circle(10% at 50% 50%)" // Small circle at the right
    }, {
        duration: 3,
        clipPath: "circle(75% at 50% 50%)" // Larger circle centered
    });

    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "0% 90%",
            end: "70% 50%",
            scrub: true,
            scroller: "#main",
        }
    });
 tl6.to("#fanta", {
        top: "110%",
        left: "0%"
    }, 'orange')
    tl6.to("#orange-cut", {
        top: "160%",
        left: "23%"
    }, 'orange')
    tl6.to("#orange", {
        width: "15%",
        top: "170%",
        right: "10%"
    }, 'orange')
    tl6.to("#leaf", {
        top: "110%",
        rotate: "130deg",
        left: "70%"
    }, 'orange')
    tl6.to("#leaf2", {
        top: "110%",
        rotate: "130deg",
        left: "10%"
    }, 'orange')
    var t = gsap.timeline();
    t.from(".background svg", {
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: "#mid",
            scroller: "#main",
            start: "top 5%",
            toggleActions: "play none none reverse",
        }
    })
    var tl9 = gsap.timeline();
    tl9.from("#fifth_page", {
        backgroundColor: "#F5EAD0",
        scrollTrigger: {
            trigger: "#fifth_page",
            start: "top 30%",
            end: "top 10%",
            scrub: true,
            scroller: "#main",
        }
    })
 tl9.from("#fifth_page h1, #fifth_page h2", {
        opacity: 0,
        stagger: 0.4,
        scale: 0.3,
        scrollTrigger: {
            trigger: "#fifth_page",
            start: "0% 45%",
            end: "20% 20%",
            scrub: true,
            scroller: "#main",
        }
    })

    const imgArray = [
        "/assets/brand5.jpg",
        "/assets/brand2.jpg",
        "/assets/brand1.jpg",
        "/assets/brand4.jpg",
        "/assets/brand3.jpg",
        "/assets/brand6.jpg",
        "/assets/brand7.jpg",
        "/assets/brand8.jpg",
        "/assets/brand9.jpg",
        "/assets/brand10.jpg",
        "/assets/brand11.jpg",
        "/assets/brand13.jpg",
        "/assets/brand14.jpg",
        "/assets/brand15.jpg",
        "/assets/brand16.jpg",
        "/assets/brand19.jpg",
        "/assets/brand22.jpg",
        "/assets/brand25.jpg",
        "/assets/brand30.jpg",
        "/assets/brand32.jpg",
        "/assets/brand33.jpg",
    ];

    const throttleFunction = (func, delay) => {
        let prev = 0;
        return (...args) => {
            let now = new Date().getTime();

            if (now - prev > delay) {
                prev = now;

                return func(...args);
            }
        }
    }

    let x = 0;
    let y = 0;
    let prevImgIndex;

    document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets) => {
        let imgIndex = Math.round(Math.random() * (imgArray.length - 1));
        if (imgIndex === prevImgIndex) {
            imgIndex = Math.round(Math.random() * (imgArray.length - 1));
        }

        let w = window.innerWidth;
        let rotateAngle = (dets.clientX - w / 2) / (w / 70);

        let div = document.createElement("div");
        div.classList.add("imgContainer");
        div.style.left = x + "px";
        div.style.top = y + "px";
        div.style.rotate = rotateAngle + "deg";

        if (x !== dets.clientX) {
            gsap.to(div, {
                left: dets.clientX,
                top: dets.clientY,
            })
        }

        let img = document.createElement('img');
        img.setAttribute("src", imgArray[imgIndex]);
        div.appendChild(img);

        document.body.appendChild(div);
        gsap.timeline()
            .to(img, {
                y: "0",
                scale: 1,
                ease: "back.out(1.4)",
                duration: .7,
            })
            .to(img, {
                y: "150%",
                ease: "easeInOut", // Ease out effect
                scale: 2,
                delay: .1
            });

        setTimeout(() => {
            div.remove();
        }, 1300);

        x = dets.clientX;
        y = dets.clientY;
        prevImgIndex = imgIndex;
    }, 300));

    var tl8 = gsap.timeline();
    tl8.from("#fudge,#nobake,#breads", {
        opacity: 0,
        x: 220,
        duration: 3,
        stagger: 1.2,
        scrollTrigger: {
            trigger: "#sixth_page",
            start: "0% 20%",
            end: "0% 0%",
            scrub: true,
            scroller: "#main",
        }
    }, 'cd')
    tl8.from("#sixth_page h1,#sixth_page p", {
        opacity: 0,
        x: -220,
        delay: 2,
        duration: 3,
        stagger: 1,
        scrollTrigger: {
            trigger: "#sixth_page",
            start: "0% 20%",
            end: "0% 0%",
            scrub: true,
            scroller: "#main",
        }
    }, 'cd')
    const section = document.querySelector(".activities");
    const activities = section.querySelectorAll(".activity");

    activities.forEach((activityElement, i) => {
        activityElement.addEventListener("click", () => {
            if (activityElement.classList.contains('active')) return;

            // Move the section to the center of activityElement
            section.style.transform = `translateX(${25 - i * 50}%)`;

            // Animations to previous/next element
            const previousActiveElement = section.querySelector('.active');

            previousActiveElement.classList.remove('active');
            activityElement.classList.add("active");

            // Background
            const item = activityElement.getAttribute("data-item");
            const wave = document.querySelector(`[data-wave="${item}"]`);
            wave.parentNode.appendChild(wave);
        });
    });




});
