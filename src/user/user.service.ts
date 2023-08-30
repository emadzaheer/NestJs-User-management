import { Injectable } from '@nestjs/common';
import { Controller, Get, Post, Req, Param, Delete, Patch } from "@nestjs/common";
import { Request } from 'express';
import { UpdateUserDto } from './dto/user-update.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}    // a database query
 
    get():Promise<User[]> {
        // return {name: "EZ", age: 24};
        return this.userRepository.find();  //returns all the users 
    }

    create(updateUserDto: UpdateUserDto){
        return this.userRepository.save(updateUserDto);       //wehatever u write in postman body, ikt will return
    }

    // update(req: Request, param: {userId:number}){
    //     return {body: req.body, param};
    // }
    //changed to:
    update(updateUserDto: UpdateUserDto, param: {userId:number}){
        return {body: updateUserDto, param};
    }

    show (userId: number){
        return this.userRepository.findOne({where: {id: userId}});
    }

    delete (param: {userId: Number}){
        return Param;
    }
}
