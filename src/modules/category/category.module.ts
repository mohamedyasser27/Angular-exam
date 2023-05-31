import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDropDownComponent } from './components/category-drop-down/category-drop-down.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
  declarations: [CategoryDropDownComponent, CategoriesPageComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  exports: [CategoryDropDownComponent],
})
export class CategoryModule {}
