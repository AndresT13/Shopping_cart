import { SharingDataService } from './../services/sharing-data.service';
import { CardItem } from './../models/CartItem';
import { Product } from '../models/Products';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogComponent, NavbarComponent, RouterOutlet],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {
  products: Product[] = [];

  items: CardItem[] = [];

  total: number = 0;

  constructor(
    private sharingDataService: SharingDataService,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.service.findAll();

    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.calculateTotal();
    this.onDeleteCart();
  }

  onAddCart(product: Product): void {
    const hasItem = this.items.find((item) => item.product.id === product.id);

    if (hasItem) {
      // el operador map devuelve una nueva instancia de los items del arreglo pero modificado
      this.items = this.items.map((item) => {
        if (item.product.id === product.id) {
          return {
            // se esparcen los elementos con " ..."
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    } else {
      // mutabilidad los tres pubntos son para agregar todo lo que tenga el objeto
      this.items = [...this.items, { product: { ...product }, quantity: 1 }];
    }
    this.calculateTotal();
    this.saveSession();
  }

  onDeleteCart(): void {
    this.sharingDataService.idProductEventEmitter.subscribe((id) => {
      this.items = this.items.filter((item) => item.product.id !== id);
      console.log(id + ' Se ha ejecutado el evento  idProductEventEmitter');
      // this.calculateTotal();
      if (this.items.length === 0) {
        sessionStorage.removeItem('cart');
        sessionStorage.clear();
      }
      this.calculateTotal();
      this.saveSession();
    });
  }

  calculateTotal(): void {
    this.total = this.items.reduce(
      (accumulator, item) => accumulator + item.quantity * item.product.price,
      0
    );
  }

  saveSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
}
