function gantiVideo(el) {
    const mainVideo = document.getElementById("mainVideo");
    const playlist = document.querySelector(".playlist");

    // Clone main video jadi versi kecil
    const newSmall = mainVideo.cloneNode(true);
    newSmall.removeAttribute("id");
    newSmall.setAttribute("width", "100");
    newSmall.setAttribute("onclick", "gantiVideo(this)");

    // Ambil video yang diklik
    const clickedVideo = el;

    // Clone video kecil jadi video utama
    const newMain = clickedVideo.cloneNode(true);
    newMain.setAttribute("id", "mainVideo");
    newMain.removeAttribute("controls");
    newMain.setAttribute("width", "300");

    newMain.muted = true;
    newMain.autoplay = true;
    newMain.loop = true;

    // Ganti elemen di DOM
    mainVideo.parentNode.replaceChild(newMain, mainVideo);
    clickedVideo.parentNode.replaceChild(newSmall, clickedVideo);

    // Reload biar play
    newMain.load();
    newMain.play();
}

function peringatan1() {
    alert("Ini adalah video Inuyasha, silakan klik video kecil untuk mengganti video utama! (When yah🗿)");
}

function peringatan2() {
    alert("Ini adalah audio Inuyasha, silakan klik tombol play untuk memutar audio! (When yah🗿)");
}

function peringatan3() {
    alert("Inuyasha adalah anime yang menceritakan tentang petualangan seorang setengah iblis bernama Inuyasha dan seorang gadis manusia bernama Kagome dalam mencari pecahan Shikon no Tama yang memiliki kekuatan besar. Anime ini sangat populer di kalangan penggemar anime dan manga, terutama di era 2000-an.");
}



document.addEventListener("DOMContentLoaded", function () {

    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("playBtn");
    const progress = document.getElementById("progress");
    const currentTime = document.getElementById("currentTime");
    const duration = document.getElementById("duration");

    // ▶️ PLAY / PAUSE
    playBtn.onclick = () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = "⏸";
        } else {
            audio.pause();
            playBtn.textContent = "▶";
        }
    };

    // ⏱ UPDATE PROGRESS
    audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progress.value = percent;
            currentTime.textContent = formatTime(audio.currentTime);
        }
    });

    // ⏳ SET DURATION
    audio.addEventListener("loadedmetadata", () => {
        duration.textContent = formatTime(audio.duration);
    });

    // 🎚 SEEK
    progress.addEventListener("input", () => {
        if (audio.duration) {
            audio.currentTime = (progress.value / 100) * audio.duration;
        }
    });

    // 🔄 RESET SAAT SELESAI
    audio.addEventListener("ended", () => {
        playBtn.textContent = "▶";
        progress.value = 0;
        currentTime.textContent = "0:00";
    });

    // FORMAT TIME
    function formatTime(time) {
        let min = Math.floor(time / 60);
        let sec = Math.floor(time % 60);
        return min + ":" + (sec < 10 ? "0" + sec : sec);
    }

});