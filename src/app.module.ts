import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { typeOrmInit } from './provider/mysql.provider';

@Module({
  imports: [typeOrmInit(), UserModule],
})
export class AppModule {}
