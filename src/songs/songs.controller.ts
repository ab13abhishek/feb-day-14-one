import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Scope,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';

@Controller({
  path: 'songs',
  scope: Scope.REQUEST,
})
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  findAll() {
    // return 'returns all songs';
    try {
      return this.songsService.findAll();
    } catch (error) {
      // console.error('Error fetching songs:', error);
      throw new HttpException(
        'Error fetching songs',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `fetche song with id ${id} and ${typeof id}`;
  }
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number) {
    return `updates a song with id ${id}`;
  }
  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    // return 'creates a song';
    return this.songsService.create(createSongDto);
  }
  @Delete(':id')
  delete() {
    return 'deletes a song';
  }
}
