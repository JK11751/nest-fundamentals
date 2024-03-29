import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db
  //local array of songs

  private readonly songs = [];
  create(song) {
    //save the song to the db
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    //fetch all songs from the db
    return this.songs;
  }
}
