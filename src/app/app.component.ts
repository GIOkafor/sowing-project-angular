import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products: any;

  constructor(
    private productService: ProductsService
  ){}

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    console.log("Getting products");
    this.productService
      .getAllProducts()
      .subscribe((res:any) => this.products = res.products)
  }
}
