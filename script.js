let blown = false;

function blowCandle() {

    if (blown) {
        return;
    }

    blown = true;

    const flame = document.getElementById("flame");

    const instruction = document.getElementById("instruction");

    const wish = document.getElementById("wish");


    // Blow out the candle
    flame.innerHTML = "💨";

    flame.style.animation = "none";


    // Change instruction
    instruction.innerHTML = "✨ Your wish is on its way...";


    // Show birthday wish
    setTimeout(function () {

        wish.classList.remove("hidden");

        instruction.innerHTML = "🎉 Happy Birthday, Himanshu! ❤️";

    }, 800);
}