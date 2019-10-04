import { Component, Input } from '@angular/core';
import { CartService } from './cart.service';
import { FavouritesService } from './favourites.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.css' ]
})
export class ProductComponent  {
  @Input() product: string;

  constructor(
    private cartService: CartService,
    private favouritesService: FavouritesService
  ){}

  addToCart(product){
    this.cartService.addToCart(product);
  }

  addToFavourites(product){
    this.favouritesService.addToFavourites(product);
  }
}
