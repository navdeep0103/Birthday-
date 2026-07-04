const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const progressFill = document.querySelector(".progress-fill");
const progressBar = document.querySelector(".progress");

// Play / Pause
playBtn.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        playBtn.innerHTML = "❚❚";
    } else {
        song.pause();
        playBtn.innerHTML = "▶";
    }
});

// Update Progress
song.addEventListener("timeupdate", () => {
    if (song.duration) {
        const progress = (song.currentTime / song.duration) * 100;
        progressFill.style.width = progress + "%";
    }
});

// Seek
progressBar.addEventListener("click", (e) => {
    if (song.duration) {
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        song.currentTime = (clickX / rect.width) * song.duration;
    }
});

// Song End
song.addEventListener("ended", () => {
    playBtn.innerHTML = "▶";
    progressFill.style.width = "0%";
});

// Page Animation
window.addEventListener("load", () => {
    const letter = document.querySelector(".letter");

    letter.style.opacity = "0";
    letter.style.transform = "translateY(30px)";
    letter.style.transition = "all 0.8s ease";

    setTimeout(() => {
        letter.style.opacity = "1";
        letter.style.transform = "translateY(0)";
    }, 200);
});