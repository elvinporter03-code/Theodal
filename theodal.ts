type Song = HTMLAudioElement;
let current_song: HTMLAudioElement;
//knappar:
const Albanian_Bartender : HTMLElement | null = document.getElementById("Albanian_Bartender");
const playbtn : HTMLElement | null = document.getElementById("Play_Pause");
function play_song(path: string): void{
    let song: Song = new Audio(path);
    if(current_song != song){
        current_song= song;
        current_song.play();
    } 
};

function Play_Pause(){
    if(current_song.paused){
       current_song.play();
    } else{
       current_song.pause();
    }
}

if(Albanian_Bartender !== null) {
    Albanian_Bartender.addEventListener("click", () => 
        {play_song('./music/albanian_music/Albanian Bartender.mp3');});
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