import { UserService } from './user.service';
import { Request } from 'express';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): {
        name: string;
        age: number;
    };
    getUserEmail(): string;
    getUserId(userId: number): number;
    update(req: Request): any;
    deleteUser(userId: number): number;
    store(req: Request): any;
}
