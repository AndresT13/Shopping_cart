import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Products';
import { ProductCartComponent } from '../product-cart/product-cart.component';

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './catalog.component.html'
 
})
export class CatalogComponent {

  // @Input para enviar al hijo
@Input()  products: Product[]=[];

// pare enviar al padre
@Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();


onAddCard(product: Product){
  this.productEventEmitter.emit(product);
}

}
