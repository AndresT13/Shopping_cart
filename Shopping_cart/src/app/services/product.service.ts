import { Injectable } from '@angular/core';
import { Product } from '../models/Products';
import { Products } from '../data/Products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  findAll(): Product[]{
    return Products;
  }
}
