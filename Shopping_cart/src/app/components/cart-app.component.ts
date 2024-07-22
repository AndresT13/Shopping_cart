import { CardItem } from './../models/CartItem';
import { Product } from '../models/Products';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogComponent, CartComponent, NavbarComponent],
  templateUrl: './cart-app.component.html'
})
export class CartAppComponent implements OnInit{

  title! :'Catálogos de productos App!';
  products: Product[] = [];
  items: CardItem[] = [];

  showCart: boolean = false;

  total : number = 0;

  constructor(private service: ProductService){

  }

  ngOnInit(): void {
      this.products = this.service.findAll();
      
      this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
      this.calculateTotal();
  }


  onAddCart(product: Product): void{
    const hasItem = this.items.find(item => item.product.id === product.id);
    
    if(hasItem){
      // el operador map devuelve una nueva instancia de los items del arreglo pero modificado
        this.items = this.items.map(item => {
          if (item.product.id === product.id) {
            return {
              // se esparcen los elementos con " ..."
              ... item, 
              quantity: item.quantity + 1
            }
          }
          return item;
        })
    } else {

      // mutabilidad los tres pubntos son para agregar todo lo que tenga el objeto 
      this.items = [... this.items, {product: {... product}, quantity: 1}];
    }
    this.calculateTotal();
    this.saveSession();
  }


  onDeleteCart(id:number): void{
    this.items = this.items.filter( item => item.product.id !== id);
    this.calculateTotal();
  }


  calculateTotal(): void {
    this.total = this.items.reduce( (accumulator, item) => accumulator + item.quantity + item.product.price, 0);
  }


  saveSession():void {
    //guarda todo el texto como un string con la estructura del JSON
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  openCart():void{
    this.showCart = !this.showCart;
  }

}
