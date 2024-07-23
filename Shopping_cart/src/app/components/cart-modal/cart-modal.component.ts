import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardItem } from '../../models/CartItem';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',
})
export class CartModalComponent {
  title!: 'Catálogos de productos App!';
  @Input() items: CardItem[] = [];
  @Input() total = 0;

  @Output() idProductEventEmitter = new EventEmitter();
  @Output() openCartEventEmitter = new EventEmitter();

  onDeleteCart(id: number) {
    this.idProductEventEmitter.emit(id);
  }
  openCart(): void {
    this.openCartEventEmitter.emit();
  }
}
