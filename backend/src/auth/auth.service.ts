import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import * as bcrypt from 'bcrypt';
import {
  LoginDto,
  RegisterBusinessDto,
  RegisterPersonalDto,
} from './dto/auth.dto.js';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async registerPersonal(dto: RegisterPersonalDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const fullName = `${dto.firstName} ${dto.lastName}`.trim();

    const user = await this.prisma.user.create({
      data: {
        name: fullName,
        email: dto.email,
        password: hashedPassword,
        role: 'CUSTOMER',
      },
    });

    const payload = { sub: user.id, email: user.email, role: user.role };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      status: 'success',
      message: 'Personal account created successfully',
      token: accessToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }

  async registerBusiness(dto: RegisterBusinessDto) {
    const existingCompany = await this.prisma.company.findUnique({
      where: { contactEmail: dto.email },
    });

    if (existingCompany) {
      throw new ConflictException('Application with this email already exists');
    }

    await this.prisma.company.create({
      data: {
        name: dto.companyName,
        websiteUrl: dto.companyWebsite || null,
        contactFirstName: dto.firstName,
        contactLastName: dto.lastName,
        contactEmail: dto.email,
        status: 'PENDING',
      },
    });

    return {
      status: 'success',
      message:
        'Business application submitted successfully. We will contact you after review.',
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      status: 'success',
      message: 'Login successful',
      token: accessToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
  }
}
