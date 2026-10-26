import { Controller, Post, Get, UseGuards, Body, Req } from '@nestjs/common';
import {
  RegisterPersonalDto,
  RegisterBusinessDto,
  LoginDto,
} from './dto/auth.dto.js';
import { AuthService } from './auth.service.js';
import { AuthGuard } from './auth.guard.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async handleRegister(@Body() req: RegisterPersonalDto) {
    return await this.authService.registerPersonal(req);
  }

  @Post('register/business')
  async handleRegisterBusiness(@Body() req: RegisterBusinessDto) {
    return await this.authService.registerBusiness(req);
  }

  @Post('login')
  async handleLogin(@Body() req: LoginDto) {
    return await this.authService.login(req);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async getProfile(@Req() req: any) {
    return await this.authService.getMe(req.user.sub);
  }
}
