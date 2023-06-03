import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '@auth/services/authentication.service';
import { LocalStorageManagerService } from '../../services/local-storage-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logged: boolean = this._lsManager.getItems('logged', false);
  private sub!: Subscription;
  constructor(
    private _authService: AuthenticationService,
    private _lsManager: LocalStorageManagerService
  ) {}
  ngOnInit(): void {
    this.sub = this._authService.getLogged().subscribe((data: boolean) => {
      this.logged = data;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  logout() {
    this._authService.signout()
  }
}
