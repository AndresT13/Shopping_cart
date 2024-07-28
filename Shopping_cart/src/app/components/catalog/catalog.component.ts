import { ProductService } from './../../services/product.service';
import { SharingDataService } from './../../services/sharing-data.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../models/Products';
import { ProductCartComponent } from '../product-cart/product-cart.component';

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  // @Input para enviar al hijo
  products: Product[] = [];

  // pare enviar al padre
  productEventEmitter: EventEmitter<Product> = new EventEmitter();

  constructor(
    private ProductService: ProductService,
    private SharingDataService: SharingDataService
  ) {}
  ngOnInit(): void {
    this.products = this.ProductService.findAll();
  }

  onAddCard(product: Product) {
    this.SharingDataService.productEventEmitte.emit(product);
  }
}
