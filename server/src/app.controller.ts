import { Controller, Post, UseGuards, Request, Res } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Res() res: Response) {
    const jwt = await this.authService.login(req.user);

    res.cookie('jwt', jwt, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      domain: 'localhost',
      path: '/',
    });

    return res.send({ message: 'Login successful', access_token: jwt });
  }
}
