import { SharingDataService } from './../../services/sharing-data.service';
import { Component, EventEmitter } from '@angular/core';

import { CardItem } from '../../models/CartItem';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  tittle = 'Carro de Compras';
  title!: 'Catálogos de productos App!';

  items: CardItem[] = [];
  total: number = 0;

  constructor(
    private router: Router,
    private sharingDataService: SharingDataService
  ) {
    this.items = this.router.getCurrentNavigation()?.extras.state!['items'];
    this.total = this.router.getCurrentNavigation()?.extras.state!['total'];
  }

  onDeleteCart(id: number) {
    //this.idProductEventEmitter.emit(id);
    this.sharingDataService.idProductEventEmitter.emit(id);
  }
}
