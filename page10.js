const playButtonPage10 = document.getElementById("playHeart");
const musicCraftPage10 = document.getElementById("musicCraft");

playButtonPage10.onclick = () => {

    playButtonPage10.innerHTML = "⏳";
    playButtonPage10.disabled = true;

    setTimeout(() => {

        playButtonPage10.style.display = "none";
        musicCraftPage10.style.display = "none";

        // Open the Google Drive video
        window.open(
            "https://drive.google.com/file/d/12GK4mM5M-OywmAqJ7ib92gDU7ODLzMdJ/view?usp=drive_link",
            "_blank"
        );

        // Automatically go to the next page
        document.querySelector("#continuePage10").click();

    }, 600);

};