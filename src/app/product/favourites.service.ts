import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FavouritesService{

  favourites = [];

  constructor(
  ){}

  addToFavourites(product){
    console.log("Adding product to favourites: ", product);
  }
}