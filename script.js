document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('loveSong');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Pause Our Song';
    } else {
        audio.pause();
        this.textContent = 'Play Our Song';
    }
});
