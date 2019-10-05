import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService{

  cart = [];

  constructor(
  ){}

  getCart(){
    return this.cart;
  }

  getProductInCart(prod){
    var cart = this.getCart();
    
    for(var i = 0; i < cart.length; i++){

  		if(prod.objectID === cart[i].product.objectID){
  			//console.log("Item already added");
  			return cart[i];
  		}
  	}
  	return null;
  }

  isInCart(prod){
    var cart = this.getCart();
    
    for(var i = 0; i < cart.length; i++){

  		if(prod.objectID === cart[i].product.objectID){
  			return i;
  		}
  	}
  	return null;
  }

  addToCart(product){
    var productInCart = this.getProductInCart(product)

    if(productInCart){
      var index = this.isInCart(product);
      var updatedProduct = {product: product, count: productInCart.count + 1};
      this.cart.splice(index, 1, updatedProduct);
    }else
      this.cart.push({product: product, count: 1});

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(product){
    console.log("removing product from cart: ", product);
  }
}