/* =========================================
   PASSWORD
========================================= */

const correctPassword = "babu";

const passwordScreen = document.getElementById("passwordScreen");
const birthdayPage = document.getElementById("birthdayPage");

const passwordInput = document.getElementById("passwordInput");
const unlockButton = document.getElementById("unlockButton");

const errorMessage = document.getElementById("errorMessage");

const togglePassword = document.getElementById("togglePassword");


/* =========================================
   UNLOCK FUNCTION
========================================= */

function unlockBirthdayPage() {

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

        errorMessage.textContent = "";

        passwordScreen.classList.add("hidden");

        birthdayPage.classList.remove("hidden");

        document.body.style.overflowX = "hidden";

        createExtraHearts();

    } else {

        errorMessage.textContent =
            "Oops... that's not the secret password 💗";

        passwordInput.value = "";

        passwordInput.focus();

        passwordInput.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-7px)" },
                { transform: "translateX(7px)" },
                { transform: "translateX(-5px)" },
                { transform: "translateX(5px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 350
            }
        );

    }

}


/* =========================================
   BUTTON CLICK
========================================= */

unlockButton.addEventListener("click", unlockBirthdayPage);


/* =========================================
   ENTER KEY
========================================= */

passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        unlockBirthdayPage();

    }

});


/* =========================================
   SHOW / HIDE PASSWORD
========================================= */

togglePassword.addEventListener("click", function() {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "👀";

    }

});


/* =========================================
   CANDLE
========================================= */

const flame = document.getElementById("flame");

const candleInstruction =
    document.getElementById("candleInstruction");

const wishMessage =
    document.getElementById("wishMessage");


flame.addEventListener("click", function() {

    if (flame.classList.contains("blown")) {
        return;
    }

    flame.classList.add("blown");

    candleInstruction.classList.add("hidden");

    wishMessage.classList.remove("hidden");

    createCelebration();

});


/* =========================================
   EXTRA FLOATING HEARTS
========================================= */

function createExtraHearts() {

    const symbols = ["♥", "♡", "✦", "✧"];

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("div");

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 18) + "px";

        heart.style.color =
            "rgba(196, 76, 119, 0.35)";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "0";

        document.body.appendChild(heart);


        const duration =
            5000 + Math.random() * 5000;

        heart.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 0
                },

                {
                    transform:
                        "translateY(-50vh) rotate(15deg)",
                    opacity: 0.7
                },

                {
                    transform:
                        "translateY(-110vh) rotate(-15deg)",
                    opacity: 0
                }
            ],
            {
                duration: duration,

                iterations: Infinity
            }
        );

    }

}


/* =========================================
   CELEBRATION AFTER CANDLE
========================================= */

function createCelebration() {

    const symbols = [
        "💗",
        "💕",
        "♡",
        "♥",
        "✨",
        "🎀"
    ];


    for (let i = 0; i < 25; i++) {

        const item = document.createElement("div");

        item.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        item.style.position = "fixed";

        item.style.left = "50%";

        item.style.top = "45%";

        item.style.fontSize =
            (18 + Math.random() * 20) + "px";

        item.style.pointerEvents = "none";

        item.style.zIndex = "20";


        document.body.appendChild(item);


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 220;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        item.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0.5)",

                    opacity: 0
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1.2)`,

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x * 1.2}px),
                            calc(-50% + ${y * 1.2}px)
                        ) scale(0.7)`,

                    opacity: 0
                }
            ],
            {
                duration: 1800,

                easing: "cubic-bezier(.2,.8,.3,1)"
            }
        );


        setTimeout(() => {

            item.remove();

        }, 1900);

    }

}