import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from 'src/repository/user/user.repository.service';

@Injectable()
export class UserService {
  constructor(private userReposityService: UserRepositoryService) {}

  async find() {
    return await this.userReposityService.find();
  }

  async create() {
    return await this.userReposityService.create();
  }
}
