import { UserService } from './user.service';

import { Controller, Get, Post, Req, Param, Delete, Patch, Body, Put, ParseIntPipe } from "@nestjs/common";

import { Request } from 'express';
import { UpdateUserDto } from './dto/user-update.dto';


@Controller('user')
export class UserController {

    constructor(private userService: UserService){};

    @Get()                                   //base route 
    getUsers() {
        return this.userService.get();
    }

    @Post()                     //body is actually req.body
    storeUser(@Body() updateUserDto: UpdateUserDto){
        return this.userService.create(updateUserDto);          //whatever u write in postman body, ikt will return
    }

    // @Patch('/:userId') 
    // update(@Req() req: Request, @Param() param : {userId:number}  ){
    //     return this.userService.update(req, param);
    // }
    //using body instead of req:
    @Put('/:userId') 
    update(@Body() updateUserDto: UpdateUserDto, 
    @Param() param : { userId : number},  
    ){
        return this.userService.update(updateUserDto, param); 
    }

    @Get('/email')
    getUserEmail() {
        return "ez@ez.com";
    }

    @Get('/:Id')               // anything after a : is a variable and you can 
    async getUser(@Param('userId', ParseIntPipe)  userId: number){
        console.log(await this.userService.show(userId));
        
        return await this.userService.show(userId);  
    }

    @Delete('/:userId')               // anything after a : is a variable and you can 
    deleteUser(@Param() param: { userId: number} ){
        return this.userService.delete(param);  
    }

   
}
