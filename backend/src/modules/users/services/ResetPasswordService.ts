import { inject, injectable } from 'tsyringe';
import { isAfter, addHours } from 'date-fns';

// Error
import AppError from '@shared/errors/AppError';

// Models
// import User from '../infra/typeorm/entities/User';

import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUsersTokensRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exists.');
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User token does not exists.');
    }

    const tokenCreateAt = userToken.created_at;
    const compareDate = addHours(tokenCreateAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('token expired.');
    }

    user.password = await this.hashProvider.generateHash(password);

    await this.usersRepository.save(user);
  }
}

export default ResetPasswordService;
