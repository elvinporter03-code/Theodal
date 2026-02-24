type Song = HTMLAudioElement;
let current_song: HTMLAudioElement;
//knappar:

const playbtn : HTMLElement | null = document.getElementById("Play_Pause");
const previousbtn : HTMLElement | null = document.getElementById("Previous");
const skipbtn : HTMLElement | null = document.getElementById("Skip");

const albantheobtn : HTMLElement | null = document.getElementById("albantheo");
const albanmusik :  HTMLElement | null = document.getElementById("albanmusik"); 
const Albanian_Bartenderbtn : HTMLElement | null = document.getElementById("Albanian_Bartender");
const Albanian_Bartender_Audio: Song = new Audio('./music/albanian_music/Albanian Bartender.mp3');

function play_song(song: Song): void{
    if(current_song != song){
        current_song= song;
        current_song.play();
        if(playbtn !== null){
            if(current_song.paused){
                playbtn.textContent="PLAY";
            }   else{
            playbtn.textContent="PAUSE";
            }
        }
    } 
};

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