import { Request } from 'express';
export declare class AppController {
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
