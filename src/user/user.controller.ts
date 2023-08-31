import { UserService } from './user.service';

import { Controller, Get, Post, Req, Param, Delete, Patch, Body, Put, ParseIntPipe } from "@nestjs/common";

import { Request } from 'express';
import { UpdateUserDto } from './dto/user-update.dto';


@Controller('user')
export class UserController {

    constructor(private userService: UserService){};

    @Get()                                   //base route 
    getUsers() {
        console.log(this.userService.get());
        return this.userService.get();
    }

    @Post()                     //body is actually req.body
    storeUser(@Body() updateUserDto: UpdateUserDto){
        return this.userService.create(updateUserDto);          //whatever u write in postman body, ikt will return
    }

    @Patch('/:userId') 
    async update(
    @Body() updateUserDto: UpdateUserDto, 
    @Param('userId') userId: number,  // Use 'userId' here to match the route parameter
    ) {
    return this.userService.update(updateUserDto, userId);
    }
 

    @Get('/email')
    getUserEmail() {
        return "ez@ez.com";
    }

    @Get('/:id')
    getUserById(@Param('id') id: number) {
 
      return this.userService.show(id);
    }
    
    @Delete('/:id')               // anything after a : is a variable and you can 
    async remove(@Param('id') id: number) {
        return this.userService.remove(id);  
    }


    


    // @Patch('/:userId') 
    // update(@Req() req: Request, @Param() param : {userId:number}  ){
    //     return this.userService.update(req, param);
    // }
    //using body instead of req:

}
