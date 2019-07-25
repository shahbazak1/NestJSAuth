import { Injectable,BadRequestException } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

    registerUser(userId: number, username: string, password: string): any{
    if(!this.users.some((user) => user.userId === userId)){
       this.users.push({userId, username, password});
      console.log(this.users);
    } else {
      throw new BadRequestException('User already exists..!')
    }
  }
}