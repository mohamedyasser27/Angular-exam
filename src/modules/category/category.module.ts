import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTileComponent } from './components/category-tile/category-tile.component';
import { CategoryListComponent } from './components/category-list/category-list.component';



@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryTileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
