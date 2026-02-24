import {Queue} from '../../lib/queue_array';
import {List} from '../../lib/list';

export type Playlist = List<Song>;
export type Song = HTMLAudioElement;
export const Albanian_bartender: string = '../music/albanian_music/Albanian bartender.mp3';

export function play_song(path: string): void{
    const song: Song = new Audio(path);
    song.play();
};

export function add_to_playlist(song: Song, playlist: Playlist) : Playlist{
    return playlist;
};

export function remove_from_playlist(song: Song, playlist: Playlist): Playlist{
    return playlist;
}

export function make_playlist(name : string) : Playlist {
    return null;
}

export function add_to_queue(song:Song, queue: Queue<Song>) : Queue<Song>{
    return queue;
}

export function delete_playlist(playlist: Playlist) : void {
    
};