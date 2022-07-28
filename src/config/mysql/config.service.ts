import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from 'src/repository/user/user.entity';

@Injectable()
export class MysqlConfigService {
  private host;
  private port;
  private password;
  private username;
  private database;
  constructor(private configService: ConfigService) {
    this.host = this.configService.get<string>('mysql.host');
    this.port = this.configService.get<string>('mysql.port');
    this.password = this.configService.get<string>('mysql.password');
    this.username = this.configService.get<string>('mysql.username');
    this.database = this.configService.get<string>('mysql.database');
  }

  get config(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.host,
      port: this.port,
      username: this.username,
      password: this.password,
      database: this.database,
      synchronize: true,
      entities: [UserEntity],
    };
  }
}
