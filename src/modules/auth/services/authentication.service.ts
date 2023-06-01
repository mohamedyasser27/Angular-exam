import { Injectable } from '@angular/core';
import { User } from '../User';
import { LocalStorageManagerService } from 'src/modules/shared/services/local-storage-manager.service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _users: User[] = [];
  constructor(private _lsManager: LocalStorageManagerService) {}
  public logged = new Subject<boolean>();

  sendLogged(logged: boolean) {
    this.logged.next(logged);
    this._lsManager.setItems('logged', logged);
  }

  getLogged() {
    return this.logged.asObservable();
  }

  login(visitor_email: string, visitor_password: string): void {
    this._users = this._lsManager.getItems('users', []);
    for (let user of this._users) {
      if (user.email == visitor_email) {
        if (user.password == visitor_password) {
          this.sendLogged(true);
          alert('logged in successfully');
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

    this.sendLogged(true);
    this._users.push(newUser);
    this._lsManager.setItems('users', this._users);

    alert('registed succesfully');
  }

  signout() {
    this.sendLogged(false);

  }
}
