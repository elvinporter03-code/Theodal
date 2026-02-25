type Song = HTMLAudioElement;
let temp : HTMLAudioElement = new Audio();
let current_song: Song = temp;
let active_selection : string = " ";
let queuearray : Array<string> = [];
//knappar:
const playbtn : HTMLElement | null = document.getElementById("Play_Pause");
const previousbtn : HTMLElement | null = document.getElementById("Previous");
const skipbtn : HTMLElement | null = document.getElementById("Skip");
const bar : HTMLElement | null = document.getElementById("progressbar");
const play2 : HTMLElement | null = document.getElementById("Play");
const current : HTMLElement | null = document.getElementById("current");
const queuebtn : HTMLElement | null = document.getElementById("Queue");
const activeq : HTMLElement | null = document.getElementById("q");
//Albanmusik
const albantheobtn : HTMLElement | null = document.getElementById("albantheo"); //knappen för att visa albantheos musik
const albanmusik :  HTMLElement | null = document.getElementById("albanmusik"); //containern för musiken som vi togglar synligheten på
//låtar
const SONGS : Record<string, string> = {
    albanianBartender: './music/albanian_music/Albanian Bartender.mp3',
    omen: './music/freaky_country/Omen In The Lords Church.mp3',
    delivery: './music/country/City Mail Special Delivery.mp3',
    gustavboyfriend: './music/country/Gustav Got a Boyfriend.mp3',
    redeagle: './music/albanian_music/Gold Chain, Red Eagle.mp3',
    sunnyalbania: './music/albanian_music/Sun-Drunk in Albania'
};
let q : Queue<string> = empty();
function play_song(path: string): void {
    const absolutePath = new URL(path, location.href).href;

    // Om ingen låt spelas → skapa och spela
    if (!current_song) {
        current_song = new Audio(absolutePath);
        current_song.play();
        if(playbtn !== null){
            playbtn.textContent="PAUSE";
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

function Play_Pause():void{
    if(current_song.paused){
       current_song.play();
       playbtn ? playbtn.textContent="PAUSE" : undefined;
    } else{
       current_song.pause();
       playbtn ? playbtn.textContent="PLAY" : undefined;
    }
}

function skip(): void{
    let tmp : string = " ";
    play_song(head(q)); 
    dequeue(q);
    queuearray = rebuild_array(queuearray);
    for(let i = 0; i <= queuearray.length - 1; i++){
        tmp = tmp + queuearray[i] + '\n' ;
    }
    activeq ? activeq.textContent = tmp : undefined;
}
function previous():void{
    current_song.currentTime = 0;
}
function toggle_hide(artist : HTMLElement) : void{
    if(artist.style.visibility === "visible"){
        artist.style.visibility = "hidden";
    }
    else {
        artist.style.visibility = "visible";
    }

}
function progressbar():void{  //funkar inte
    bar ? bar.style.animation="progressing ${current_song.duration}s linear infinite;" : undefined;
}

if(playbtn !== null) {
    playbtn.addEventListener("click", () => 
        {Play_Pause();
        if(current_song.paused){playbtn.textContent="PLAY";}
        else{
            playbtn.textContent="PAUSE";
        };
    });
}

function add_to_queue(song_name : string) {
    if(is_empty(q) && current_song === temp){
        play_song(song_name);
    }
    enqueue(song_name, q);
    if(current && activeq){
        let tmp : string = " ";
        queuearray.push(current.textContent);
        for(let i = 0; i <= queuearray.length - 1; i++){
            tmp = tmp + queuearray[i] + '\n' ;
        }
        activeq.textContent = tmp;
    }
}
function rebuild_array(origin: Array<string>) : Array<string>{
    let tmp : Array<string> = [];
    for(let i = 1; i < origin.length; i++){
        tmp[i-1] = origin [i];
    }
    return tmp;
}
current_song.onended = () => {
    skip();
}

document.querySelectorAll(".music").forEach(btn => { 
    btn.addEventListener("click", () => {
        const songName = btn.getAttribute("data-song")!;
        active_selection = songName;
        current ? current.textContent= btn.textContent : undefined;
    });
});


previousbtn ? previousbtn.addEventListener("click", () => {previous()}) : undefined;
skipbtn ? skipbtn.addEventListener("click", () => {skip()}) : undefined;
albantheobtn ? albanmusik ? albantheobtn.addEventListener("click", () => 
    {toggle_hide(albanmusik)}) : undefined : undefined;
play2 ? play2.addEventListener("click", () => {play_song(active_selection)}) : undefined;
queuebtn ? queuebtn.addEventListener("click", () => {add_to_queue(active_selection)}): undefined;

/**
 * A homogeneous queue.
 * The first entry points to the index of the queue's head element,
 * the second entry points to the next empty index of the queue, and
 * the last entry holds the values (contents) of the queue.
 * @template T type of all queue elements
 */
 type Queue<T> = [number, number, Array<T>];

/**
 * Constructs a queue without any elements.
 * @template T type of all queue elements
 * @returns Returns an empty queue.
 */
 function empty<T>(): Queue<T> {
    return [0, 0, []];
}

/**
 * Checks whether a queue is empty.
 * @template T type of all queue elements
 * @param q queue to check for emptiness
 * @returns Returns true, if the queue q has elements, false otherwise.
 */
 function is_empty<T>(q: Queue<T>): boolean {
    return q[0] === q[1];
}

/**
 * Adds an element to the queue.
 * @template T type of all queue elements
 * @param e element to add
 * @param q queue to modify
 * @modifies q by adding element e to the end
 */
 function enqueue<T>(e: T, q: Queue<T>): void {
    const tail_index = q[1];
    q[2][tail_index] = e;
    q[1] = tail_index + 1;  // update tail index
}

/**
 * Retrieves the first element of the queue.
 * @precondition Assumes q to be non-empty
 * @template T type of all queue elements
 * @param q queue to get the first element of
 * @returns Returns the element of the queue that was enqueued first.
 */
 function head<T>(q: Queue<T>): T {
    const head_index = q[0];
    return q[2][head_index];
}

/**
 * Removes the first element of a queue.
 * @precondition Assumes q to be non-empty
 * @template T type of all queue elements
 * @param q queue to remove the element from
 * @modifies q such that the element that was enqueued first is removed
 */
 function dequeue<T>(q: Queue<T>): void {
    const head_index = q[0];
    q[0] = head_index + 1;
}

/**
 * Pretty-prints the contents of a queue to standard output.
 * @template T type of all queue elements
 * @param q queue to pretty-print
 */
 function display_queue<T>(q: Queue<T>): void {
    console.log(q[2].slice(q[0], q[1]));
}