import { Housinglocation } from 'src/app/interface/housinglocation';
import { CartService } from './../../service/cart/cart.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from 'src/app/component/cart-item/cart-item.component';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-housing',
  standalone: true,
  imports:[
    CommonModule,
    CartItemComponent,
    RouterModule
  ],
  templateUrl: './cart-housing.component.html',
  styleUrls: ['./cart-housing.component.css']
})
export class CartHousingComponent {
  cartList: Housinglocation[] = [];
  private subscription: Subscription = new Subscription();
  selectedItems: { [key: number]: boolean } = {};
  isAllChecked: boolean = false;

  constructor(private cartService:CartService){}
  ngOnInit(){
   this.subscription =  this.cartService.cartList$.subscribe(item=>{
      this.cartList = item;
    });
    this.cartList.forEach(item => {
      this.selectedItems[item.id] = false;
    });
  }
  // Toggle tất cả items
  toggleAllItems(event: any) {
    const isChecked = event.target.checked;
    this.isAllChecked = isChecked;
    
    this.cartList.forEach(item => {
      this.selectedItems[item.id] = isChecked;
    });
  }

  // Toggle một item
  toggleItem(itemId: number, isChecked: boolean) {
    this.selectedItems[itemId] = isChecked;
    
    // Kiểm tra xem tất cả items có được chọn không
    this.isAllChecked = this.cartList.every(item => 
      this.selectedItems[item.id]
    );
  }

  // Kiểm tra xem có item nào được chọn không
  get hasSelectedItems(): boolean {
    return Object.values(this.selectedItems).some(value => value);
  }

  // Xử lý mua items đã chọn
  buySelectedItems() {
    // Xử lý logic mua hàng ở đây
    console.log('Buying selected items:', 
      this.cartList.filter(item => this.selectedItems[item.id])
    );
  }

  // Xóa items đã chọn
  deleteSelectedItems() {
    // Xử lý logic xóa ở đây
     this.cartList = this.cartList.filter(item => !this.selectedItems[item.id]);
    this.cartService.UpdateCartList(this.cartList)
    // Reset selected items
    this.selectedItems = {};
    this.isAllChecked = false;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
