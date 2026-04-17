function play() {
    var audio = document.getElementById("opera");
    audio.play();
}

document.querySelectorAll("[data-sound]").forEach((el) => {
    el.addEventListener("click", () => {
    playSound(el.dataset.sound);
    });
});

const playSound = (fileName) => {
    const audio = new Audio();
    audio.src = `./assets/${fileName}.mp3`;
    audio.play();
};