"use strict";
var temp = new Audio();
var current_song = temp;
var active_selection = " ";
//knappar:
var playbtn = document.getElementById("Play_Pause");
var previousbtn = document.getElementById("Previous");
var skipbtn = document.getElementById("Skip");
var bar = document.getElementById("progressbar");
var play2 = document.getElementById("Play");
//Albanmusik
var albantheobtn = document.getElementById("albantheo"); //knappen för att visa albantheos musik
var albanmusik = document.getElementById("albanmusik"); //containern för musiken som vi togglar synligheten på
//låtar
var SONGS = {
    albanianBartender: './music/albanian_music/Albanian Bartender.mp3',
    omen: './music/freaky_country/Omen In The Lords Church.mp3',
    delivery: './music/country/City Mail Special Delivery.mp3',
    gustavboyfriend: './music/country/Gustav Got a Boyfriend.mp3',
    redeagle: './music/albanian_music/Gold Chain, Red Eagle.mp3',
    sunnyalbania: './music/albanian_music/Sun-Drunk in Albania'
};
var q = empty();
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
function toggle_hide(artist) {
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
function add_to_queue(song_name) {
    enqueue(SONGS.song_name, q);
}
current_song.onended = function () {
    play_song(head(q));
    dequeue(q);
};
document.querySelectorAll(".music").forEach(function (btn) {
    btn.addEventListener("click", function () {
        var songName = btn.getAttribute("data-song");
        active_selection = songName;
    });
});
previousbtn ? previousbtn.addEventListener("click", function () { previous(); }) : undefined;
skipbtn ? skipbtn.addEventListener("click", function () { skip(); }) : undefined;
albantheobtn ? albanmusik ? albantheobtn.addEventListener("click", function () { toggle_hide(albanmusik); }) : undefined : undefined;
play2 ? play2.addEventListener("Play", function () { play_song(active_selection); }) : undefined;
/**
 * Constructs a queue without any elements.
 * @template T type of all queue elements
 * @returns Returns an empty queue.
 */
function empty() {
    return [0, 0, []];
}
/**
 * Checks whether a queue is empty.
 * @template T type of all queue elements
 * @param q queue to check for emptiness
 * @returns Returns true, if the queue q has elements, false otherwise.
 */
function is_empty(q) {
    return q[0] === q[1];
}
/**
 * Adds an element to the queue.
 * @template T type of all queue elements
 * @param e element to add
 * @param q queue to modify
 * @modifies q by adding element e to the end
 */
function enqueue(e, q) {
    var tail_index = q[1];
    q[2][tail_index] = e;
    q[1] = tail_index + 1; // update tail index
}
/**
 * Retrieves the first element of the queue.
 * @precondition Assumes q to be non-empty
 * @template T type of all queue elements
 * @param q queue to get the first element of
 * @returns Returns the element of the queue that was enqueued first.
 */
function head(q) {
    var head_index = q[0];
    return q[2][head_index];
}
/**
 * Removes the first element of a queue.
 * @precondition Assumes q to be non-empty
 * @template T type of all queue elements
 * @param q queue to remove the element from
 * @modifies q such that the element that was enqueued first is removed
 */
function dequeue(q) {
    var head_index = q[0];
    q[0] = head_index + 1;
}
/**
 * Pretty-prints the contents of a queue to standard output.
 * @template T type of all queue elements
 * @param q queue to pretty-print
 */
function display_queue(q) {
    console.log(q[2].slice(q[0], q[1]));
}
