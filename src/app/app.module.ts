import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './services/products.service';
import { FavouritesService } from './product/favourites.service';
import { CartService } from './product/cart.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, ProductComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ProductsService, FavouritesService, CartService ]
})
export class AppModule { }
