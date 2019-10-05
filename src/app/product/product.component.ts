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

  isInCart(product){
    var index = this.cartService.isInCart(product);
    
    if(index)
      return true;
    else 
      return false;
  }

  addToFavourites(product){
    this.favouritesService.addToFavourites(product);
  }
}
