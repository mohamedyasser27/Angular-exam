import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//feature modules
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { ProductModule } from '@product/product.module';
import { CategoryModule } from '@category/category.module';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth/auth.module';



@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    CategoryModule,
    ProductModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
