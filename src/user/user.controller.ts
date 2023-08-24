import { UserService } from './user.service';

import { Controller, Get, Post, Req, Param, Delete, Patch, Body, Put } from "@nestjs/common";

import { Request } from 'express';
import { UpdateUserDto } from './dto/user-update.dto';


@Controller('user')
export class UserController {

    constructor(private userService: UserService){};

    @Get()                                  //base route 
    getUsers() {
        return this.userService.get();
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

    @Get('/:userId')               // anything after a : is a variable and you can 
    getUser(@Param() param: {userId: number} ){
        return this.userService.show(param);  
    }

    @Delete('/:userId')               // anything after a : is a variable and you can 
    deleteUser(@Param() param: { userId: number} ){
        return this.userService.delete(param);  
    }

    @Post()                     //body is actually req.body
    storeUser(@Body() body: any){
        return this.userService.create(body);          //whatever u write in postman body, ikt will return
    }
}
