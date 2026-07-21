import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UpdateUserDto } from './dto/user-update.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.userRepository.find();
  }

  show(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  create(createUserDto: UpdateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  update(updateUserDto: UpdateUserDto, id: number) {
    return this.userRepository.update({ id }, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }
}
