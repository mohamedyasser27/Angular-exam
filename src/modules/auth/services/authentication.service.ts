import { Injectable } from '@angular/core';
import { User } from '../User';
import { LocalStorageManagerService } from 'src/modules/shared/services/local-storage-manager.service';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _users: User[] = [];
  private _currentUser: User | null = null;
  constructor(private _lsManager: LocalStorageManagerService) {}

  get currentUser(): User | null {
    return this._currentUser;
  }

  login(visitor_email: string, visitor_password: string): void {
    this._users = this._lsManager.getItems('users', []);
    for (let user of this._users) {
      if (user.email == visitor_email) {
        if (user.password == visitor_password) {
          alert('logged in successfully');
          this._currentUser = { ...user };
          return;
        } else {
          alert('wrong password');
          return;
        }
      }
    }
    alert('please register');
  }

  register(newUser: User) {
    this._users = this._lsManager.getItems('users', []);

    for (let user of this._users) {
      if (user.email == newUser.email) {
        alert('please log in');
        return;
      }
    }

    this._users.push(newUser);
    this._lsManager.setItems('users', this._users);
    this._currentUser = { ...newUser };
    alert('registed succesfully');
  }

  signout() {
    this._currentUser = null;
  }
}
