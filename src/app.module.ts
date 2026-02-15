import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { DevConfigService } from './common/providers/DevConfigService';

const devConfig = {
  // Add your development configuration here
};

const proConfig = {
  // Add your production configuration here
};

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [
    AppService,
    LoggerMiddleware,
    {
      provide: DevConfigService,
      useClass: DevConfigService,
    },
    {
      provide: 'CONFIG',
      useFactory: () =>{
        return process.env.NODE_ENV === 'development' ? devConfig: proConfig;
      }
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('songs');
    // consumer.apply(LoggerMiddleware).forRoutes({path:'songs', method: RequestMethod.POST});
    // consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }
}
