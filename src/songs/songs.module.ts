import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from '../common/constants/connection';

const mockSongsService = {
  findAll() {
    return [{ id: 1, title: 'Bijuria' }];
  },
};

@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    {
      provide: 'CONNECTION',
      useValue: connection,

      // provide: SongsService,
      // useValue: mockSongsService,
      // useClass: SongsService,
    },
  ],
})
export class SongsModule {}
