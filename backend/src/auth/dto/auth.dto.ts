import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsUrl,
  ValidateIf,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterPersonalDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @IsNotEmpty({ message: 'First name cannot be empty' })
  @MaxLength(50)
  firstName: string;

  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  @MaxLength(50)
  lastName: string;

  @Transform(({ value }) =>
    typeof value === 'string' ? value.toLowerCase().trim() : value,
  )
  @IsEmail({}, { message: 'Please provide a valid email address' })
  email: string;

  @MaxLength(72)
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @IsOptional()
  @IsString()
  source?: string;
}

export class RegisterBusinessDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  firstName: string;

  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  lastName: string;

  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @IsNotEmpty({ message: 'Company name cannot be empty' })
  @MaxLength(100)
  companyName: string;

  @Transform(({ value }) =>
    typeof value === 'string' ? value.toLowerCase().trim() : value,
  )
  @IsEmail()
  email: string;

  @IsOptional()
  @ValidateIf((o) => o.companyWebsite !== '')
  @IsUrl({}, { message: 'Please provide a valid website URL' })
  companyWebsite?: string;

  @IsOptional()
  @IsString()
  source?: string;
}

export class LoginDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.toLowerCase().trim() : value,
  )
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class ForgotPasswordDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.toLowerCase().trim() : value,
  )
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  source?: string;
}
