import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/user-update.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.show(id);
  }

  @Post()
  storeUser(@Body() createUserDto: UpdateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(updateUserDto, id);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
