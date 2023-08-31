import { UserService } from './user.service';
import { UpdateUserDto } from './dto/user-update.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("./entity/user.entity").User[]>;
    storeUser(updateUserDto: UpdateUserDto): Promise<UpdateUserDto & import("./entity/user.entity").User>;
    update(updateUserDto: UpdateUserDto, userId: number): Promise<import("typeorm").UpdateResult>;
    getUserEmail(): string;
    getUserById(id: number): Promise<import("./entity/user.entity").User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
