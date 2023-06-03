import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDropDownComponent } from './components/category-drop-down/category-drop-down.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [CategoryDropDownComponent, CategoriesPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  exports: [CategoryDropDownComponent],
})
export class CategoryModule {}
