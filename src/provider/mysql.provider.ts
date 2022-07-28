import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfigModule } from 'src/config/mysql/config.module';
import { MysqlConfigService } from 'src/config/mysql/config.service';

export const typeOrmInit = () => {
  return TypeOrmModule.forRootAsync({
    imports: [MysqlConfigModule],
    inject: [MysqlConfigService],
    useFactory: (configService: MysqlConfigService) => {
      return configService.config;
    },
  });
};
