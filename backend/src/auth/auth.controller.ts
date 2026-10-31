import { Controller, Post, Get, UseGuards, Body, Req } from '@nestjs/common';
import {
  RegisterPersonalDto,
  RegisterBusinessDto,
  LoginDto,
  ForgotPasswordDto,
} from './dto/auth.dto.js';
import { AuthService } from './auth.service.js';
import { AuthGuard } from './auth.guard.js';
import { RolesGuard } from './roles.guard.js';
import { Roles } from './roles.decorator.js';
import { Role } from '@prisma/client';

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

  @Post('forgot-password')
  async handleForgotPassword(@Body() req: ForgotPasswordDto) {
    return await this.authService.forgotPassword(req);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async getProfile(@Req() req: any) {
    return await this.authService.getMe(req.user.sub);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.SUPER_ADMIN)
  @Get('admin/ping')
  async adminPing() {
    return { message: 'Super admin access granted' };
  }
}
