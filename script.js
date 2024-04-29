const backgroundMusic = document.getElementById('background-music');
const muteButton = document.getElementById('mute-button');
const speakerIcon = document.getElementById('speaker-icon');

muteButton.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        speakerIcon.src = "audio/volume.svg";
        speakerIcon.alt = "Desmutado";
    } else {
        backgroundMusic.pause();
        speakerIcon.src = "audio/mute.svg";
        speakerIcon.alt = "Mutado";
    }
});