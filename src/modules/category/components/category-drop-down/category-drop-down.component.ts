import { Component, Output, EventEmitter } from '@angular/core';
import { CategoryApiService } from '../../services/category-api.service';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-category-drop-down',
  templateUrl: './category-drop-down.component.html',
  styleUrls: ['./category-drop-down.component.scss'],
})
export class CategoryDropDownComponent {
  allCategories: string[] = [];
  @Output() SelectCategoryEvent = new EventEmitter<string>();
  constructor(private _categoriesApi: CategoryApiService) {}
  ngOnInit() {
    this._categoriesApi
      .getCategories()
      .subscribe((recievedCategories: string[]) => {
        this.allCategories = [...recievedCategories];
      });
  }
  selectFilter(selectedFilter: string) {
    const dataToSend = selectedFilter;
    this.SelectCategoryEvent.emit(dataToSend);
  }
}
