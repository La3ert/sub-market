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
  @IsString()
  firstName: string;

  @IsString()
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
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Transform(({ value }) =>
    typeof value === 'string' ? value.toLowerCase().trim() : value,
  )
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  companyName: string;

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
