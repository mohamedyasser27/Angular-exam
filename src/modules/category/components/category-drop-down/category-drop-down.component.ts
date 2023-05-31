import { Component } from '@angular/core';
import { CategoryApiService } from '../../services/category-api.service';
@Component({
  selector: 'app-category-drop-down',
  templateUrl: './category-drop-down.component.html',
  styleUrls: ['./category-drop-down.component.scss'],
})
export class CategoryDropDownComponent {
  allCategories: string[] = [];
  constructor(private _categoriesApi: CategoryApiService) {}
  ngOnInit() {
    this._categoriesApi
      .getCategories()
      .subscribe((recievedCategories: string[]) => {
        this.allCategories = [...recievedCategories];
      });
  }

}
