import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CartService } from '../product/cart.service';

@Component({
  selector: 'cart-dialog',
  templateUrl: 'cart-dialog.html',
  styleUrls: ['cart-dialog.css']
})
export class CartDialog {
  cart: any;

  constructor(
    public dialogRef: MatDialogRef<CartDialog>,
    public cartSvc: CartService
  ) {}

  ngOnInit(){
    this.cart = this.cartSvc.getCart();
  }

  reduceProductCount(product){

  }

  increaseProductCount(product){

  }
}