import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';
@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject('CONFIG')
    private config: { port: string },
  ) {}

  getHello(): string {
    return `Its the ${this.devConfigService.getDBHOST()} database host`;
  }
}
