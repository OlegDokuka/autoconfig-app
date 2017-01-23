import { User } from '../types/user';

export class UserService {
  private user: User;

  getUser(): Promise<User> {
    return new Promise((resolve, reject) => {
      resolve(this.user);
    });
  }

  setUser(user: User): Promise<null> {
    return new Promise((resolve, reject) => {
      this.user = user;
      resolve();
    });
  }
}
