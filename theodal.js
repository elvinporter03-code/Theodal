"use strict";
var current_song;
//knappar:
var Albanian_Bartender = document.getElementById("Albanian_Bartender");
var playbtn = document.getElementById("Play_Pause");
function play_song(path) {
    var song = new Audio(path);
    if (current_song != song) {
        current_song = song;
        current_song.play();
    }
}
;
function Play_Pause() {
    if (current_song.paused) {
        current_song.play();
    }
    else {
        current_song.pause();
    }
}
if (Albanian_Bartender !== null) {
    Albanian_Bartender.addEventListener("click", function () { play_song('./music/albanian_music/Albanian Bartender.mp3'); });
}
if (playbtn !== null) {
    playbtn.addEventListener("click", function () {
        Play_Pause();
        if (current_song.paused) {
            playbtn.textContent = "PLAY";
        }
        else {
            playbtn.textContent = "PAUSE";
        }
        ;
    });
}
