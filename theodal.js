"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var current_song;
var current_title;
var active_selection = " ";
var queuearray = [];
var canqueue = false;
var lyrics = {
    'Albanian Bartender': "Verse 1 Felix missed his train again\n" +
        "Wet cuff\n" +
        "Cold hands\n" +
        "Stumbled through a red door glow\n" +
        "Half past ten\n\n" +
        "He ordered in a quiet voice\n" +
        "Didn't look up first\n" +
        "Till he heard a low laugh say\n" +
        "I'll fix the thirst\n\n" +
        "Dark hair tied back\n" +
        "Name tag slightly bent\n" +
        "Accent like a slow song\n" +
        "Soft and confident\n\n" +
        "[Chorus]\n" +
        "Oh my Albanian bartender\n" +
        "Say my name like you remember\n" +
        "Every pour, every grin\n" +
        "Makes me wanna taste your skin\n" +
        "Didn't plan to stay till dawn\n" +
        "But your touch keeps pulling me on\n" +
        "Felix laughing, saying one more round\n" +
        "While the whole damn room spins upside down\n\n" +
        "[Verse 2]\n" +
        "You're new here? he asked\n" +
        "Soap on his hands\n" +
        "Felix traced the pattern\n" +
        "Of a ringless tan\n\n" +
        "Shared a pack of stories\n" +
        "By the dish room light\n" +
        "How he crossed an ocean\n" +
        "Chasing something bright\n\n" +
        "Felix watched his mouth move\n" +
        "Forgot about the rain\n" +
        "How a stranger wiping counters\n" +
        "Could make him feel this way\n\n" +
        "[Chorus]\n" +
        "Oh my Albanian bartender\n" +
        "Say my name like you remember\n" +
        "Every pour, every grin\n" +
        "Makes me wanna taste your skin\n" +
        "Didn't plan to stay till dawn\n" +
        "But your touch keeps pulling me on\n" +
        "Felix laughing, saying one more round\n" +
        "While the whole damn room spins upside down\n\n" +
        "[Bridge]\n" +
        "Last call\n" +
        "Chairs on tables\n" +
        "Keys around his wrist (hey)\n" +
        "Stay a while\n" +
        "he murmurs\n" +
        "Place is ours like this\n\n" +
        "Felix laughs too loudly\n" +
        "Heart against his ribs\n" +
        "As a careful\n" +
        "Steady hand\n" +
        "Finds a place on his\n\n" +
        "[Chorus]\n" +
        "Oh my Albanian bartender\n" +
        "You say my name like it belongs here\n" +
        "Every pour\n" +
        "Every small joke\n" +
        "Pulled me right over your side of the counter\n" +
        "Didn't know love spoke in your language\n" +
        "Till you answered me in a whisper\n" +
        "Felix walked out in the morning\n" +
        "But his heart stayed with the bartender",
    'Red Eagle, Gold Chain': "[Verse 1]\n" +
        "Uncle drives up from Tirana\n" +
        "Trunk full of bags and plans\n" +
        "Kisses both my cheeks\n" +
        "He’s laughing\n" +
        "Come here\n" +
        "Light me one\n" +
        "My man\n" +
        "\n" +
        "Silver ash on kitchen tiles\n" +
        "Rakia in a coffee cup\n" +
        "Gold chain shining on his chest\n" +
        "Says for us\n" +
        "It’s always up\n" +
        "\n" +
        "[Chorus]\n" +
        "For my Albanians (hey!)\n" +
        "Raise that glass and sing\n" +
        "Gold chain on my neck\n" +
        "Red eagle in my skin\n" +
        "All my uncles at the table\n" +
        "Stories loud as war\n" +
        "We got love for Albania\n" +
        "And we always want some more\n" +
        "\n" +
        "[Verse 2]\n" +
        "Auntie says he drinks too early\n" +
        "He just winks\n" +
        "it’s never late\n" +
        "Passes me the homemade bottle\n" +
        "Says remember where you’re made\n" +
        "\n" +
        "Balcony full of blue-grey circles\n" +
        "Laughter floating in the air\n" +
        "Every cousin\n" +
        "Every neighbor\n" +
        "Feels like I got family everywhere\n" +
        "\n" +
        "[Chorus]\n" +
        "For my Albanians (hey!)\n" +
        "Raise that glass and sing\n" +
        "Gold chain on my neck\n" +
        "Red eagle in my skin\n" +
        "All my uncles at the table\n" +
        "Stories loud as war\n" +
        "We got love for Albania\n" +
        "And we always want some more\n" +
        "\n" +
        "[Bridge]\n" +
        "From the village to the city (ah!)\n" +
        "Same toast\n" +
        "Same flame\n" +
        "We argue\n" +
        "Hug\n" +
        "Get dizzy\n" +
        "Still proud of our name\n" +
        "Rakia burns\n" +
        "Heart burns brighter\n" +
        "Every sip\n" +
        "We swear it’s true\n" +
        "If there’s smoke and if there’s laughter\n" +
        "Know an Albanian loves you\n" +
        "\n" +
        "[Chorus]\n" +
        "For my Albanians (hey!)\n" +
        "Raise that glass and sing\n" +
        "Gold chain on my neck\n" +
        "Red eagle in my skin\n" +
        "All my uncles at the table\n" +
        "Stories loud as war\n" +
        "We got love for Albania\n" +
        "And we always want some more\n",
};
// Knappar
var playbtn = document.getElementById("Play_Pause");
var previousbtn = document.getElementById("Previous");
var skipbtn = document.getElementById("Skip");
var play2 = document.getElementById("Play");
var current = document.getElementById("current");
var queuebtn = document.getElementById("Queue");
var activeq = document.getElementById("q");
var shufflebtn = document.getElementById("Shuffle");
var playing = document.getElementById("playing");
var box = document.getElementById("lyrics-box");
// Artister och deras musikcontainers
var albantheobtn = document.getElementById("albantheo"); //knappen för att visa albantheos musik
var albanmusik = document.getElementById("albanmusik"); //containern för musiken som vi togglar synligheten på
var countrytheobtn = document.getElementById("countrytheo"); // --||--
var countrymusik = document.getElementById("countrymusik");
var rocktheobtn = document.getElementById("rocktheo"); // --||--
var rockmusik = document.getElementById("rockmusik");
var poptheobtn = document.getElementById("poptheo"); // --||--
var popmusik = document.getElementById("popmusik");
var stockholmstheobtn = document.getElementById("stockholmstheo");
var stockholmsmusik = document.getElementById("stockholmsmusik");
// Låtar
var SONGS = {
    'Albanian Bartender': './music/albanian_music/Albanian Bartender.mp3',
    'Omen in The Lords church': './music/freaky_country/Omen In The Lords Church.mp3',
    'City Mail Special Delivery': './music/country/City Mail Special Delivery.mp3',
    'Gustav Got a boyfriend': './music/country/Gustav Got a Boyfriend.mp3',
    'Red Eagle, Gold Chain': './music/albanian_music/Gold Chain, Red Eagle.mp3',
    'Sun-Kissed in Albania': './music/albanian_music/Sun-Drunk in Albania.mp3',
    'Bror Henke': './music/stockholm/Bror Henke.mp3',
    'Filthy Halo': './music/Rock/Filthy Halo.mp3',
    'Russian Bathhouse': './music/Rock/Russian Bathhouse.mp3'
};
var q = empty();
function play_song(path, name) {
    var absolutePath = new URL(path, location.href).href;
    playing ? playing.textContent = name : undefined;
    // Om ingen låt spelas -> skapa och spela
    if (!current_song) {
        current_song = new Audio(absolutePath);
        current_song.onended = function () {
            skip();
        };
        current_song.play();
        showLyricsFor(name);
        if (playbtn !== null) {
            playbtn.textContent = "PAUSE";
        }
        return;
    }
    // Om det är en ny låt -> Byt
    if (current_song.src !== absolutePath) {
        current_song.pause();
        current_song = new Audio(absolutePath);
        current_song.onended = function () {
            skip();
        };
        current_song.play();
        showLyricsFor(name);
        return;
    }
    else {
        current_song.currentTime = 0;
        return;
    }
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
    if (is_empty(q)) {
        playbtn ? playbtn.textContent = "PLAY" : undefined;
    }
    play_song(head(q), queuearray[0]);
    dequeue(q);
    queuearray = rebuild_array(queuearray);
    display_queue();
    if (is_empty(q)) {
        canqueue = false;
    }
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
function add_to_queue(song_path, title) {
    if (!current_song) { // Om ingen låt finns alls
        play_song(song_path, title);
    }
    else if (!current_song.paused && current) { //queuea om låten spelas
        enqueue(song_path, q);
        queuearray.push(current === null || current === void 0 ? void 0 : current.textContent.trim());
        display_queue();
    }
}
function display_queue() {
    var tmp = " ";
    for (var i = 0; i <= queuearray.length - 1; i++) {
        tmp = tmp + queuearray[i] + '\n';
    }
    activeq ? activeq.textContent = tmp : undefined;
}
function rebuild_array(origin) {
    var tmp = [];
    for (var i = 1; i < origin.length; i++) {
        tmp[i - 1] = origin[i];
    }
    return tmp;
}
// Fisher–Yates‑shuffle
function shuffle_array(arr) {
    var _a;
    var a = __spreadArray([], arr, true);
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
    }
    return a;
}
function shuffle_queue() {
    // shuffla arrayen
    queuearray = shuffle_array(queuearray);
    // se till att queuen matchar
    var tmp = empty();
    for (var i = 0; i < queuearray.length; i++) {
        enqueue(SONGS[queuearray[i]], tmp);
    }
    q = tmp;
    display_queue();
}
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
    toggle_hide(albanmusik);
}
if (countrytheobtn !== null && countrymusik !== null) {
    countrytheobtn.addEventListener("click", function () { toggle_hide(countrymusik); });
    toggle_hide(countrymusik);
}
if (rocktheobtn !== null && rockmusik !== null) {
    rocktheobtn.addEventListener("click", function () { toggle_hide(rockmusik); });
    toggle_hide(rockmusik);
}
if (poptheobtn !== null && popmusik !== null) {
    poptheobtn.addEventListener("click", function () { toggle_hide(popmusik); });
    toggle_hide(popmusik);
}
if (stockholmstheobtn !== null && stockholmsmusik !== null) {
    stockholmstheobtn.addEventListener("click", function () { toggle_hide(stockholmsmusik); });
    toggle_hide(stockholmsmusik);
}
shufflebtn === null || shufflebtn === void 0 ? void 0 : shufflebtn.addEventListener("click", function () { shuffle_queue(); });
play2 ? play2.addEventListener("click", function () {
    play_song(active_selection, current ? current === null || current === void 0 ? void 0 : current.textContent.trim() : "error");
    canqueue = true;
}) : undefined;
queuebtn ? queuebtn.addEventListener("click", function () { add_to_queue(active_selection, current_title); }) : undefined;
function showLyricsFor(songId) {
    if (!box)
        return;
    box.textContent = lyrics[songId];
}
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
