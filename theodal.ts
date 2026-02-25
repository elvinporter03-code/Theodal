import {Queue, dequeue, enqueue, head, empty} from '../../lib/queue_array';
type Song = HTMLAudioElement;
let temp : HTMLAudioElement = new Audio();
let current_song: Song = temp;
let active_selection : string = " ";
//knappar:
const playbtn : HTMLElement | null = document.getElementById("Play_Pause");
const previousbtn : HTMLElement | null = document.getElementById("Previous");
const skipbtn : HTMLElement | null = document.getElementById("Skip");
const bar : HTMLElement | null = document.getElementById("progressbar");
//Albanmusik
const albantheobtn : HTMLElement | null = document.getElementById("albantheo"); //knappen för att visa albantheos musik
const albanmusik :  HTMLElement | null = document.getElementById("albanmusik"); //containern för musiken som vi togglar synligheten på
const Albanian_Bartenderbtn : HTMLElement | null = document.getElementById("Albanian_Bartender"); // knapp för att spela upp låt
const Omen_In_The_Lords_Church : HTMLElement | null = document.getElementById("Omen");
const City_Mail_Special_Delivery : HTMLElement | null = document.getElementById("Citymail");
const Gustav_Got_A_Boyfriend : HTMLElement | null = document.getElementById("Gustav");
const Red_Eagle_Gold_Chain : HTMLElement | null = document.getElementById("RedEagle");
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

function skip():void{

}
function previous():void{

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
    enqueue(SONGS.song_name, q)
}

current_song.onended = () => {
    play_song(head(q)); 
    dequeue(q);
}

document.querySelectorAll(".music").forEach(btn => { 
    btn.addEventListener("click", () => {
        const songName = btn.getAttribute("data-song")!;
        active_selection = songName;
    });
});



previousbtn ? previousbtn.addEventListener("click", () => {previous()}) : undefined;
skipbtn ? skipbtn.addEventListener("click", () => {skip()}) : undefined;
albantheobtn ? albanmusik ? albantheobtn.addEventListener("click", () => 
    {toggle_hide(albanmusik)}) : undefined : undefined;
Albanian_Bartenderbtn ? Albanian_Bartenderbtn.addEventListener("click", () => 
        {play_song(SONGS.albanianBartender);}) : undefined;
Omen_In_The_Lords_Church ? Omen_In_The_Lords_Church.addEventListener("click", () => 
        {play_song(SONGS.omen);}) : undefined;
City_Mail_Special_Delivery ? City_Mail_Special_Delivery.addEventListener("click", () => 
        {play_song(SONGS.delivery);}) : undefined;
Gustav_Got_A_Boyfriend ? Gustav_Got_A_Boyfriend.addEventListener("click", () => 
        {play_song(SONGS.gustavboyfriend);}) : undefined;
Red_Eagle_Gold_Chain ? Red_Eagle_Gold_Chain.addEventListener("click", () => 
        {play_song(SONGS.redeagle);}) : undefined;
Sun_Drunk_In_Albania ? Sun_Drunk_In_Albania.addEventListener("click", () =>
        {play_song(SONGS.sunnyalbania);}) : undefined;
