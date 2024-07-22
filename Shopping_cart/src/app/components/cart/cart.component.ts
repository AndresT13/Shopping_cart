import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html'

})
export class CartComponent {
  tittle= 'Carro de Compras';

  @Input() items: any  = [];
  @Input() total: number = 0;
  @Output() idProductEventEmitter = new EventEmitter();




  onDeleteCart(id: number) {
    this.idProductEventEmitter.emit(id);
  }


}
