import * as q from '../lib/queue_array';

export type Playlist = List<Song>;
export type Song = string;


export function play_song(song : Song): void{

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

export function add_to_queue(song:Song, queue: q.Queue) : q.Queue {
    return queue;
}

export function delete_playlist(playlist: Playlist) : void {
    
}
