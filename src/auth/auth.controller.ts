import { UserService } from './../user/user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
              private userService: UserService) {}
  
  @Post('/login')
  async loginUser(@Body() logInDto: any){
    const user = await  this.userService.findByEmail(logInDto.email);
    if(user){
      if(user.password === logInDto.password){
        return user;
      }
      else{return "pass mismatch"}
    }
    
    return logInDto;
  }

  

}
