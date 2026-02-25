type Song = HTMLAudioElement;
let current_song: HTMLAudioElement;
//knappar:
const playbtn : HTMLElement | null = document.getElementById("Play_Pause");
const previousbtn : HTMLElement | null = document.getElementById("Previous");
const skipbtn : HTMLElement | null = document.getElementById("Skip");
//Albanmusik
const albantheobtn : HTMLElement | null = document.getElementById("albantheo"); //knappen för att visa albantheos musik
const albanmusik :  HTMLElement | null = document.getElementById("albanmusik"); //containern för musiken som vi togglar synligheten på
const Albanian_Bartenderbtn : HTMLElement | null = document.getElementById("Albanian_Bartender"); // knapp för att spela upp låt
const Omen_In_The_Lords_Church : HTMLElement | null = document.getElementById("Omen_In_The_Lords_Church");
const City_Mail_Special_Delivery : HTMLElement | null = document.getElementById("City_Mail_Special_Delivery");
const Gustav_Got_A_Boyfriend : HTMLElement | null = document.getElementById("Gustav_Got_A_Boyfriend");
//låtar
var SONGS = {
    albanianBartender: './music/albanian_music/Albanian Bartender.mp3',
    omen: './music/freaky_country/Omen In The Lords Church.mp3',
    delivery: './music/country/City Mail Special Delivery.mp3',
    gustavboyfriend: './music/country/Gustav Got a Boyfriend.mp3'
};


function play_song(path: string): void {
    const absolutePath = new URL(path, location.href).href;

    // Om ingen låt spelas → skapa och spela
    if (!current_song) {
        current_song = new Audio(absolutePath);
        current_song.play();
        return;
    }

    // Om det är en ny låt → byt
    if (current_song.src !== absolutePath) {
        current_song.pause();
        current_song = new Audio(absolutePath);
        current_song.play();
        return;
    }

    // Annars toggla play/pause
    if(current_song.paused){
        current_song.play();
    } else{
        current_song.pause();
    } 
}

function Play_Pause():void{
    if(current_song.paused){
       current_song.play();
    } else{
       current_song.pause();
    }
}


function skip():void{

}
function previous():void{

}
function expand_artist(artist : HTMLElement) : void{
    if(artist.style.visibility === "visible"){
        artist.style.visibility = "hidden";
    }
    else {
        artist.style.visibility = "visible";
    }

}

if(Albanian_Bartenderbtn !== null) {
    Albanian_Bartenderbtn.addEventListener("click", () => 
        {play_song(Albanian_Bartender_Audio);});
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
if(previousbtn !== null) {
    previousbtn.addEventListener("click", () => 
        {previous()});
}
if(skipbtn !== null) {
    skipbtn.addEventListener("click", () => 
        {skip()});
}
if(albantheobtn !== null && albanmusik !== null){
    albantheobtn.addEventListener("click", () => 
    {expand_artist(albanmusik)})
}