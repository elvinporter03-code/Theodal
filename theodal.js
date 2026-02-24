"use strict";
var current_song;
//knappar:
var playbtn = document.getElementById("Play_Pause");
var previousbtn = document.getElementById("Previous");
var skipbtn = document.getElementById("Skip");
var albantheobtn = document.getElementById("albantheo");
var albanmusik = document.getElementById("albanmusik");
var Albanian_Bartenderbtn = document.getElementById("Albanian_Bartender");
var Albanian_Bartender_Audio = new Audio('./music/albanian_music/Albanian Bartender.mp3');
function play_song(song) {
    if (current_song != song) {
        current_song = song;
        current_song.play();
        if (playbtn !== null) {
            if (current_song.paused) {
                playbtn.textContent = "PLAY";
            }
            else {
                playbtn.textContent = "PAUSE";
            }
        }
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
function skip() {
}
function previous() {
}
function expand_artist(artist) {
    if (artist.style.visibility === "visible") {
        artist.style.visibility = "hidden";
    }
    else {
        artist.style.visibility = "visible";
    }
}
if (Albanian_Bartenderbtn !== null) {
    Albanian_Bartenderbtn.addEventListener("click", function () { play_song(Albanian_Bartender_Audio); });
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
if (previousbtn !== null) {
    previousbtn.addEventListener("click", function () { previous(); });
}
if (skipbtn !== null) {
    skipbtn.addEventListener("click", function () { skip(); });
}
if (albantheobtn !== null && albanmusik !== null) {
    albantheobtn.addEventListener("click", function () { expand_artist(albanmusik); });
}
