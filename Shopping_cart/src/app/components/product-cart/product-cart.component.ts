import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Products';

@Component({
  selector: 'div[product-cart]',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html'

})
export class ProductCartComponent {

 @Input() product!: Product;

 @Output() productoEventEmitter: EventEmitter<Product> = new EventEmitter();


 onAddCart(product: Product){
  this.productoEventEmitter.emit(product);
 }
}

