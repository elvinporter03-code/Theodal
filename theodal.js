"use strict";
var current_song;
//knappar:
var playbtn = document.getElementById("Play_Pause");
var previousbtn = document.getElementById("Previous");
var skipbtn = document.getElementById("Skip");
var bar = document.getElementById("progressbar");
//Albanmusik
var albantheobtn = document.getElementById("albantheo"); //knappen för att visa albantheos musik
var albanmusik = document.getElementById("albanmusik"); //containern för musiken som vi togglar synligheten på
var Albanian_Bartenderbtn = document.getElementById("Albanian_Bartender"); // knapp för att spela upp låt
var Omen_In_The_Lords_Church = document.getElementById("Omen");
var City_Mail_Special_Delivery = document.getElementById("Citymail");
var Gustav_Got_A_Boyfriend = document.getElementById("Gustav");
//låtar
var SONGS = {
    albanianBartender: './music/albanian_music/Albanian Bartender.mp3',
    omen: './music/freaky_country/Omen In The Lords Church.mp3',
    delivery: './music/country/City Mail Special Delivery.mp3',
    gustavboyfriend: './music/country/Gustav Got a Boyfriend.mp3'
};
function play_song(path) {
    var absolutePath = new URL(path, location.href).href;
    // Om ingen låt spelas → skapa och spela
    if (!current_song) {
        current_song = new Audio(absolutePath);
        current_song.play();
        if (playbtn !== null) {
            playbtn.textContent = "PAUSE";
        }
        progressbar();
        return;
    }
    // Om det är en ny låt → byt
    if (current_song.src !== absolutePath) {
        current_song.pause();
        current_song = new Audio(absolutePath);
        current_song.play();
        progressbar();
        return;
    }
    // Annars toggla play/pause
    Play_Pause();
}
function Play_Pause() {
    if (current_song.paused) {
        current_song.play();
        playbtn ? playbtn.textContent = "PAUSE" : undefined;
    }
    else {
        current_song.pause();
        playbtn ? playbtn.textContent = "PLAY" : undefined;
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
function progressbar() {
    bar ? bar.style.animation = "progressing ${current_song.duration}s linear infinite;" : undefined;
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
previousbtn ? previousbtn.addEventListener("click", function () { previous(); }) : undefined;
skipbtn ? skipbtn.addEventListener("click", function () { skip(); }) : undefined;
albantheobtn ? albanmusik ? albantheobtn.addEventListener("click", function () { expand_artist(albanmusik); }) : undefined : undefined;
Albanian_Bartenderbtn ? Albanian_Bartenderbtn.addEventListener("click", function () { play_song(SONGS.albanianBartender); }) : undefined;
Omen_In_The_Lords_Church ? Omen_In_The_Lords_Church.addEventListener("click", function () { play_song(SONGS.omen); }) : undefined;
City_Mail_Special_Delivery ? City_Mail_Special_Delivery.addEventListener("click", function () { play_song(SONGS.delivery); }) : undefined;
Gustav_Got_A_Boyfriend ? Gustav_Got_A_Boyfriend.addEventListener("click", function () { play_song(SONGS.gustavboyfriend); }) : undefined;
