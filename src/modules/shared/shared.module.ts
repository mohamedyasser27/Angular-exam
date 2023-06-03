import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, SliderComponent],
  imports: [
    CommonModule,
    CarouselModule,
    ReactiveFormsModule,
    RouterLink,
    AngularMaterialModule
  ],
  exports: [FooterComponent, HeaderComponent, SliderComponent],
})
export class SharedModule {}
