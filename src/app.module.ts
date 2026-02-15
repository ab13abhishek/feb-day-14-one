import {
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestMiddleware {
  constructor(private readonly logger: LoggerMiddleware) {}
  use(req: any, res: any, next: (error?: any) => void) {
    throw new Error('Method not implemented.');
  }
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs');
    // consumer.apply(LoggerMiddleware).forRoutes({path:'songs', method: RequestMethod.POST});
    consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }
}
