// ============================
// PAGE 9
// ============================

const ribbonButtonPage9 = document.getElementById("pullRibbon");
const heartCraftPage9 = document.getElementById("heartCraft");
const nextPage9 = document.getElementById("continuePage9");

ribbonButtonPage9.onclick = () => {

    ribbonButtonPage9.style.display = "none";

    heartCraftPage9.style.display = "none";

    window.open(
        "https://drive.google.com/file/d/18yMna2CISBeiMG4iRR1Pzencg9nQ47V-/view?usp=drive_link",
        "_blank"
    );

    nextPage9.style.display = "block";

};

// ============================
// HEART BURSTS
// ============================

const bursts = [
    document.getElementById("heartBurst1"),
    document.getElementById("heartBurst2"),
    document.getElementById("heartBurst3"),
    document.getElementById("heartBurst4"),
    document.getElementById("heartBurst5")
];

setInterval(() => {

    bursts.forEach((burst, index) => {

        if (!burst) return;

        setTimeout(() => {

            for (let i = 0; i < 6; i++) {

                const heart = document.createElement("div");

                heart.className = "burstHeart";

                heart.innerHTML = [
                    "❤️",
                    "💖",
                    "💕",
                    "💗",
                    "💘"
                ][Math.floor(Math.random() * 5)];

                heart.style.setProperty(
                    "--x",
                    (Math.random() * 220 - 110) + "px"
                );

                heart.style.setProperty(
                    "--y",
                    (Math.random() * 220 - 110) + "px"
                );

                burst.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 900);

            }

        }, index * 180);

    });

}, 4000);