import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserServices from './AuthenticateUserService';
import CreateUserServices from './CreateUserService';

describe('AuthenticateUser', () => {
    let fakeUsersRepository: FakeUsersRepository;
    let fakeHashProvider: FakeHashProvider;
    let createUser: CreateUserServices;
    let authenticateUser: AuthenticateUserServices;

    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();
        createUser = new CreateUserServices(
            fakeUsersRepository,
            fakeHashProvider,
        );
        authenticateUser = new AuthenticateUserServices(
            fakeUsersRepository,
            fakeHashProvider,
        );
    });
    it('should be able to authenticate', async () => {
        const user = await createUser.execute({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
        });

        const response = await authenticateUser.execute({
            email: 'johndoe@example.com',
            password: '123456',
        });

        expect(response).toHaveProperty('token');
        expect(response.user).toEqual(user);
    });

    it('should be able to authenticate with non exist user', async () => {
        await expect(
            authenticateUser.execute({
                email: 'johndoe@example.com',
                password: '123456',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to authenticate with from password', async () => {
        await createUser.execute({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
        });

        await expect(
            authenticateUser.execute({
                email: 'johndoe@example.com',
                password: '654331',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
