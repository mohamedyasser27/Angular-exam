import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
const modules = [
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatBadgeModule,
];
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class AngularMaterialModule {}
