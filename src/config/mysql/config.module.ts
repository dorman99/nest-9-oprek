import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MysqlConfigService } from './config.service';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [MysqlConfigService],
  exports: [MysqlConfigService],
})
export class MysqlConfigModule {}
