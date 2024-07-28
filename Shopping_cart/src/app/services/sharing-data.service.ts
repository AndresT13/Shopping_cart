import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/Products';

@Injectable({
  providedIn: 'root',
})
export class SharingDataService {
  private _idProductEventEmitter: EventEmitter<number> = new EventEmitter();
  private _productEventEmitter: EventEmitter<Product> = new EventEmitter();
  constructor() {}

  get idProductEventEmitter(): EventEmitter<number> {
    return this._idProductEventEmitter;
  }

  get productEventEmitte(): EventEmitter<Product> {
    return this._productEventEmitter;
  }
}
