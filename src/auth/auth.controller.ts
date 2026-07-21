import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user || user.password !== loginDto.password) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const { password, ...safeUser } = user;
    return safeUser;
  }
}
