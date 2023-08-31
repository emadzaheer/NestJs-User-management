import { UpdateUserDto } from './dto/user-update.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    get(): Promise<User[]>;
    create(updateUserDto: UpdateUserDto): Promise<UpdateUserDto & User>;
    update(updateUserDto: UpdateUserDto, userId: number): Promise<import("typeorm").UpdateResult>;
    show(id: number): Promise<User | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
