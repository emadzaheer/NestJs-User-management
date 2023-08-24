import { Param } from "@nestjs/common";
import { UpdateUserDto } from './dto/user-update.dto';
export declare class UserService {
    get(): {
        name: string;
        age: number;
    };
    create(body: any): any;
    update(updateUserDto: UpdateUserDto, param: {
        userId: number;
    }): {
        body: UpdateUserDto;
        param: {
            userId: number;
        };
    };
    show(param: {
        userId: number;
    }): {
        userId: number;
    };
    delete(param: {
        userId: Number;
    }): typeof Param;
}
