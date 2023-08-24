import { Injectable } from '@nestjs/common';

import { Controller, Get, Post, Req, Param, Delete, Patch } from "@nestjs/common";

import { Request } from 'express';
import { UpdateUserDto } from './dto/user-update.dto';

@Injectable()
export class UserService {

    get() {
        return {name: "EZ", age: 24};
    }

    create(body: any){
        return body;       //wehatever u write in postman body, ikt will return
    }

    // update(req: Request, param: {userId:number}){
    //     return {body: req.body, param};
    // }
    //changed to:
    update(updateUserDto: UpdateUserDto, param: {userId:number}){
        return {body: updateUserDto, param};
    }

    show (param: {userId: number}){
        return param;
    }

    delete (param: {userId: Number}){
        return Param;
    }
}
