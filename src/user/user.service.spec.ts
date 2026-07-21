import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './entity/user.entity';

describe('UserService', () => {
  let service: UserService;

  const repositoryMock = {
    find: jest.fn(),
    findOneBy: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getRepositoryToken(User), useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('returns all users', async () => {
    const users = [{ id: 1, name: 'Ada', email: 'ada@example.com' }];
    repositoryMock.find.mockResolvedValue(users);

    await expect(service.get()).resolves.toBe(users);
    expect(repositoryMock.find).toHaveBeenCalled();
  });

  it('looks up a user by email', async () => {
    await service.findByEmail('ada@example.com');
    expect(repositoryMock.findOne).toHaveBeenCalledWith({
      where: { email: 'ada@example.com' },
    });
  });
});
