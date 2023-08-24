import { Controller, Get, Post, Req, Param, Delete, Patch } from "@nestjs/common";

import { Request } from 'express';

@Controller()
export class AppController {
    @Get()                                  //base route 
    getUsers() {
        return {name: "EZ", age: 24};
    }

    @Get('/email')
    getUserEmail() {
        return "ez@ez.com";
    }

    @Get('/user/:id')               // anything after a : is a variable and you can 
    getUserId(@Param() userId: number ){
        return userId;  
    }

    @Patch('/user/:id') 
    update(@Req() req: Request  ){
        return req.body;
    } 

    @Delete('/user/:id')               // anything after a : is a variable and you can 
    deleteUser(@Param() userId: number ){
        return userId;  
    }


    @Post()
    store(@Req() req: Request){
        return req.body;       //wehatever u write in postman body, ikt will return
    }
}