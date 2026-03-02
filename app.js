const songs = [
    {
        title: "50 Cent - Привычка",
        cover: "50Cent.jpg",
        audioFile: "50-Cent-Привычка.mp3"
    },
    {
        title: "Pop Ssmoke - The woo",
        cover: "pop-smoke.jpg",
        audioFile: "50Cent-ft.-popsmoke-The-woo.mp3"
    },
    {
        title: "Мот - Намёк на нас",
        cover: "mot.jpg",
        audioFile: "Мот-Намёк-на-нас.mp3"
    }
]
const trackImg = document.querySelector("#trackImage");
const trackTitle = document.querySelector("#trackTitle");
const audio = document.querySelector("#audio");
const prevTrack = document.querySelector("#prev-track");
const playTrack = document.querySelector("#play-track");
const nextTrack = document.querySelector("#next-track");

let currentTrack = 0;
let isTrackPlaying = false;
loadTrack(currentTrack);

playTrack.addEventListener("click", () => {
    if (isTrackPlaying) {
        audio.pause();
        isTrackPlaying = false;
        playTrack.innerHTML = `<i class="fa-solid fa-play"></i>`;
    } else {
        audio.play();
        isTrackPlaying = true;
        playTrack.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    }
    
})

prevTrack.addEventListener("click", () => {
    currentTrack = currentTrack > 0 ? currentTrack - 1 : songs.length - 1;
    loadTrack(currentTrack);
    audio.play();
    isTrackPlaying = true;
    playTrack.innerHTML = `<i class="fa-solid fa-pause"></i>`;

})
nextTrack.addEventListener("click", () => {
    currentTrack = currentTrack <songs.length - 1? currentTrack + 1 : 0;
    loadTrack(currentTrack);
    audio.play();
    isTrackPlaying = true;
    playTrack.innerHTML = `<i class="fa-solid fa-pause"></i>`;

})
audio.addEventListener("ended", () => {
    nextTrack.click();
})


function loadTrack(trackIdx) {
    trackImg.src = `media/${songs[trackIdx].cover}`;
    trackImg.alt = songs[trackIdx].title;
    trackTitle.textContent = songs[trackIdx].title;
    audio.src = `files/${songs[trackIdx].audioFile}`;
}

