import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { PrismaService } from '../prisma.service.js';
import { RolesGuard } from './roles.guard.js';

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');

        if (!secret) {
          throw new Error(
            'CRITICAL ERROR: JWT_SECRET is not set in the environment variables!',
          );
        }

        return {
          secret: secret,
          signOptions: { expiresIn: '1d' },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, RolesGuard],
  exports: [AuthService, RolesGuard],
})
export class AuthModule {}
