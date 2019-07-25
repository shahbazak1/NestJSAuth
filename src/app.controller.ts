import { Controller,Get, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';

@Controller('api')
export class AppController {
  constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }


  @Post('register')
   register(@Body('id') userId: number, @Body('username') userName: string, @Body('password') passWord: string) {
    //console.log(userId,userName,passWord)
     this.usersService.registerUser(userId, userName, passWord)
  }

}

