import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CartService } from './product/cart.service';
import { CartDialog } from './cart/cart.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products: any;
  cart: any;

  constructor(
    private productService: ProductsService,
    private dialog: MatDialog,
    private cartSvc: CartService
  ){}

  ngOnInit(){
    this.getProducts();
    this.cart = this.cartSvc.getCart();
  }

  getProducts(){
    console.log("Getting products");
    this.productService
      .getAllProducts()
      .subscribe((res:any) => this.products = res.products)
  }

  openCart(){
    this.dialog.open(CartDialog, {
      width: '350px'
    })
  }
}
