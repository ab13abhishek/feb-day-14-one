import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs: any[] = [];

  create(song) {
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    throw new Error('error in db while fetching songs');
    return this.songs;
  }
}
