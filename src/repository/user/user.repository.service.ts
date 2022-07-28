import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepositoryService {
  constructor(
    @InjectRepository(UserEntity) private repo: Repository<UserEntity>,
  ) {}

  async find() {
    return await this.repo.find();
  }

  async create() {
    const name = 'johh-doe-' + this._randomNumber();
    const user = new UserEntity();
    user.name = name;
    await this.repo.save(user);
    return user;
  }

  private _randomNumber() {
    return Math.floor(Math.random() * 1000);
  }
}
