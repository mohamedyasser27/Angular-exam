import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryApiService } from '@category/services/category-api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  categories: string[] = [];
  constructor(private _categoriesApi: CategoryApiService) {}
  ngOnInit() {
    this._categoriesApi.getCategories().subscribe((recievedCategories) => {
      this.categories = recievedCategories;
    });
  }
}
