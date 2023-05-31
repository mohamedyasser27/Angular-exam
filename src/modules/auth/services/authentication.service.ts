import { Injectable } from '@angular/core';
import { User } from '../User';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _logged: boolean = false;
  private _users: any = [];
  private currentUser: User | null = null;
  constructor() {}

  get logged(): boolean {
    return this._logged;
  }

  getUsers(): void {
    if (localStorage.getItem('users') == null) {
      localStorage.setItem('users', JSON.stringify([]));
    } else {
      this._users = JSON.parse(localStorage.getItem('users') || '[]');
    }
  }

  login(visitor_email: string, visitor_password: string): any {
    this.getUsers();
    for (let user of this._users) {
      if (user.email == visitor_email) {
        if (user.password == visitor_password) {
          alert('logged in successfully');
          this._logged = true;
          this.currentUser = user;
          break;
        } else {
          alert('wrong password');
        }
      }
    }
    if (!this._logged) {
      alert('please registers');
    }
  }

  register(newUser: User) {
    this.getUsers();
    console.log(this._users.length);
    if (this._users.length > 0) {
      for (let user of this._users) {
        console.log(2);
        if (user.email == newUser.email) {
          alert('please log in');
          break;
        } else {
          this._logged = true;
          this._users.push(newUser);
          localStorage.setItem('users', this._users);
          alert('registed succesfully');
        }
      }
    } else {
      console.log(3);
      this._users.push(newUser);
      localStorage.setItem('users', JSON.stringify(this._users));
      alert('registed succesfully');
    }
  }

  // signout() {}
}
