const audio = document.getElementById("audioplayer");
const theplaylist = document.getElementById("music2");
const musicig = theplaylist.getElementsByTagName("a");
let trackatm = 0;

function playmusic(index) {
    audio.src = musicig[index].href;
    audio.play();
    for (let link of musicig) link.parentElement.classList.remove("active");
    musicig[index].parentElement.classList.add("active");
}

audio.addEventListener("ended", () => {
    songlol = (songlol + 1) % musicig.length;
    playmusic(songlol)
});


theplaylist.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
        songlol = Array.from(musicig).indexOf(e.target);
        playmusic(songlol)
    }
});