import { Housinglocation } from './../../interface/housinglocation';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone:true,
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() housingLocation!:Housinglocation;
  @Input() isChecked: boolean = false;
  @Output() toggleCheck = new EventEmitter<boolean>();

  onToggleCheck(event: any) {
    this.toggleCheck.emit(event.target.checked);
  }
}
