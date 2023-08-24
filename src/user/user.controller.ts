import { UserService } from './user.service';

import { Controller, Get, Post, Req, Param, Delete, Patch, Body } from "@nestjs/common";

import { Request } from 'express';


@Controller('user')
export class UserController {

    constructor(private userService: UserService){};

    @Get()                                  //base route 
    getUsers() {
        return this.userService.get();
    }

    @Patch('/:userId') 
    update(@Req() req: Request, @Param() param : {userId:number}  ){
        return this.userService.update(req, param);
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

    @Post()
    storeUser(@Body() body: any){
        return this.userService.create(body);          //whatever u write in postman body, ikt will return
    }
}
