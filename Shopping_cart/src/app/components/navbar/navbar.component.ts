import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardItem } from '../../models/CartItem';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html'
 
})
export class NavbarComponent{




    @Input() items: CardItem[] = [];

    @Output() openCartEventEmitter = new EventEmitter();



  openCart():void{
   this.openCartEventEmitter.emit();
  }

}
