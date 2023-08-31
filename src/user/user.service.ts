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

    async create(updateUserDto: UpdateUserDto){
        return this.userRepository.save(updateUserDto);       //wehatever u write in postman body, ikt will return
    }

    // update(req: Request, param: {userId:number}){
    //     return {body: req.body, param};
    // }
    //changed to:
    async update(updateUserDto: UpdateUserDto, userId: number) {
        // Define the criteria to update a specific user based on userId
        const criteria = { id: userId };
      
        // Update the user using the provided criteria and updateUserDto
        return this.userRepository.update(criteria, updateUserDto);
    }

    show (id: number): Promise<User | null> {
        return this.userRepository.findOneBy({ id });
    }

    async remove (id: number){
        return await this.userRepository.delete({id});
    }
}
