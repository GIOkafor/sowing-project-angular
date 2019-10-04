import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService{

  url = 'https://demo1064913.mockable.io/products'

  constructor(
    private http: HttpClient
  ){}

  getAllProducts(){
    return this.http.get(this.url);
  }
}