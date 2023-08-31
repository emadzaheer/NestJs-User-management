import { UserService } from './../user/user.service';
export declare class AuthController {
    private userService;
    constructor(userService: UserService);
    loginUser(logInDto: any): Promise<any>;
}
