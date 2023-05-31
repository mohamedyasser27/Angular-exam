import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTileComponent } from './components/category-tile/category-tile.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDropDownComponent } from './components/category-drop-down/category-drop-down.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryTileComponent,
    CategoryDropDownComponent,
  ],
  imports: [CommonModule, MatMenuModule, MatButtonModule, RouterLink],
  exports: [CategoryDropDownComponent],
})
export class CategoryModule {}
