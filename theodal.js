"use strict";
var temp = new Audio();
var current_song = temp;
var active_selection = " ";
var queuearray = [];
// Knappar
var playbtn = document.getElementById("Play_Pause");
var previousbtn = document.getElementById("Previous");
var skipbtn = document.getElementById("Skip");
var play2 = document.getElementById("Play");
var current = document.getElementById("current");
var queuebtn = document.getElementById("Queue");
var activeq = document.getElementById("q");
// Artister och deras musikcontainers
var albantheobtn = document.getElementById("albantheo"); //knappen för att visa albantheos musik
var albanmusik = document.getElementById("albanmusik"); //containern för musiken som vi togglar synligheten på
var countrytheobtn = document.getElementById("countrytheo"); // --||--
var countrymusik = document.getElementById("countrymusik");
var rocktheobtn = document.getElementById("rocktheo"); // --||--
var rockmusik = document.getElementById("rockmusik");
// Låtar
var SONGS = {
    albanianBartender: './music/albanian_music/Albanian Bartender.mp3',
    omen: './music/freaky_country/Omen In The Lords Church.mp3',
    delivery: './music/country/City Mail Special Delivery.mp3',
    gustavboyfriend: './music/country/Gustav Got a Boyfriend.mp3',
    redeagle: './music/albanian_music/Gold Chain, Red Eagle.mp3',
    sunnyalbania: './music/albanian_music/Sun-Drunk in Albania.mp3'
};
var q = empty();
function play_song(path) {
    var absolutePath = new URL(path, location.href).href;
    // Om ingen låt spelas -> skapa och spela
    if (!current_song) {
        current_song = new Audio(absolutePath);
        current_song.play();
        if (playbtn !== null) {
            playbtn.textContent = "PAUSE";
        }
        return;
    }
    // Om det är en ny låt -> Byt
    if (current_song.src !== absolutePath) {
        current_song.pause();
        current_song = new Audio(absolutePath);
        current_song.play();
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
    var tmp = " ";
    play_song(head(q));
    dequeue(q);
    queuearray = rebuild_array(queuearray);
    for (var i = 0; i <= queuearray.length - 1; i++) { // Uppdaterar den visuella kön
        tmp = tmp + queuearray[i] + '\n';
    }
    activeq ? activeq.textContent = tmp : undefined;
}
function previous() {
    current_song.currentTime = 0;
}
function toggle_hide(artist) {
    if (artist.style.visibility === "visible") {
        artist.style.visibility = "hidden";
        artist.style.height = "1px";
    }
    else {
        artist.style.height = "auto";
        artist.style.visibility = "visible";
    }
}
function add_to_queue(song_name) {
    if (is_empty(q) && current_song === temp) { // Kollar om det är den första låten som läggs till i queuen och spelar i sådana fall upp den.
        play_song(song_name);
    }
    enqueue(song_name, q);
    if (current && activeq) { // Bygger upp den visuella queuen som egentligen är en array
        var tmp = " ";
        queuearray.push(current.textContent);
        for (var i = 0; i <= queuearray.length - 1; i++) {
            tmp = tmp + queuearray[i] + '\n';
        }
        activeq.textContent = tmp;
    }
}
function rebuild_array(origin) {
    var tmp = [];
    for (var i = 1; i < origin.length; i++) {
        tmp[i - 1] = origin[i];
    }
    return tmp;
}
current_song.onended = function () {
    skip();
};
document.querySelectorAll(".music").forEach(function (btn) {
    btn.addEventListener("click", function () {
        var songName = btn.getAttribute("data-song");
        active_selection = songName;
        current ? current.textContent = btn.textContent : undefined;
    });
});
// Eventlisteners för knapparna
if (playbtn !== null) { // Playbuttons funktion
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
if (albantheobtn !== null && albanmusik !== null) {
    albantheobtn.addEventListener("click", function () { toggle_hide(albanmusik); });
}
if (countrytheobtn !== null && countrymusik !== null) {
    countrytheobtn.addEventListener("click", function () { toggle_hide(countrymusik); });
}
if (rocktheobtn !== null && rockmusik !== null) {
    rocktheobtn.addEventListener("click", function () { toggle_hide(rockmusik); });
}
play2 ? play2.addEventListener("click", function () { play_song(active_selection); }) : undefined;
queuebtn ? queuebtn.addEventListener("click", function () { add_to_queue(active_selection); }) : undefined;
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
