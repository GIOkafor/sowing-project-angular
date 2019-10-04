import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService{

  cart = [];

  constructor(
  ){}

  addToCart(product){
    console.log("Adding product to cart: ", product);
  }

  removeFromCart(product){
    console.log("removing product from cart: ", product);
  }
}