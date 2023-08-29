import { UserService } from './user.service';
import { Param } from "@nestjs/common";
import { UpdateUserDto } from './dto/user-update.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("./entity/user.entity").User[]>;
    update(updateUserDto: UpdateUserDto, param: {
        userId: number;
    }): {
        body: UpdateUserDto;
        param: {
            userId: number;
        };
    };
    getUserEmail(): string;
    getUser(userId: number): {
        userId: number;
    };
    deleteUser(param: {
        userId: number;
    }): typeof Param;
    storeUser(body: any): any;
}
