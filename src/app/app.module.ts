import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './services/products.service';
import { FavouritesService } from './product/favourites.service';
import { CartService } from './product/cart.service';
import { CartDialog } from './cart/cart.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule 
  ],
  declarations: [ AppComponent, ProductComponent, CartDialog ],
  bootstrap:    [ AppComponent ],
  providers: [ ProductsService, FavouritesService, CartService ],
  entryComponents: [CartDialog]
})
export class AppModule { }
