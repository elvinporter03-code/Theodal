type Song = HTMLAudioElement;
const Albanian_bartender : string = './music/albanian_music/Albanian Bartender.mp3';

function play_song(path: string): void{
    const song: Song = new Audio(path);
    song.play();
};
