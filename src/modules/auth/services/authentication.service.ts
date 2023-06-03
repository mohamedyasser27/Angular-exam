import { Injectable } from '@angular/core';
import { User } from '../User';
import { LocalStorageManagerService } from '@shared/services/local-storage-manager.service';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _users: User[] = [];
  constructor(
    private _lsManager: LocalStorageManagerService,
    public _snackBar: MatSnackBar,
    private _router: Router
  ) {}
  public logged = new Subject<boolean>();
  navigateToHome() {
    this._router.navigate(['/home']);
  }
  sendLogged(logged: boolean) {
    this.logged.next(logged);
    this._lsManager.setItems('logged', logged);
  }

  getLogged() {
    return this.logged.asObservable();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }

  login(visitor_email: string, visitor_password: string): void {
    this._users = this._lsManager.getItems('users', []);
    for (let user of this._users) {
      if (user.email == visitor_email) {
        if (user.password == visitor_password) {
          this.sendLogged(true);
          this.openSnackBar('logged in successfully', 'Okay');
          this._lsManager.setItems('currentUser', visitor_email);
          this.navigateToHome();

          return;
        } else {
          this.openSnackBar('wrong password', 'try again');

          return;
        }
      }
    }
    this.openSnackBar('Please Register', 'Okay');
  }

  register(newUser: User) {
    this._users = this._lsManager.getItems('users', []);
    for (let user of this._users) {
      if (user.email == newUser.email) {
        this.openSnackBar('you already have an account,please log in', 'okay');

        return;
      }
    }

    this.sendLogged(true);
    this._users.push(newUser);
    this._lsManager.setItems('users', this._users);
    this._lsManager.setItems('currentUser', newUser.email);

    this.openSnackBar('registered successfully', 'okay');
    this.navigateToHome();
  }

  signout() {
    this._lsManager.setItems('currentUser', '');

    this.sendLogged(false);
    this.openSnackBar('logged out successfully', 'okay');
  }
}
