import { Param } from "@nestjs/common";
import { UpdateUserDto } from './dto/user-update.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    get(): Promise<User[]>;
    create(updateUserDto: UpdateUserDto): Promise<UpdateUserDto & User>;
    update(updateUserDto: UpdateUserDto, param: {
        userId: number;
    }): {
        body: UpdateUserDto;
        param: {
            userId: number;
        };
    };
    show(userId: number): Promise<User>;
    delete(param: {
        userId: Number;
    }): typeof Param;
}
