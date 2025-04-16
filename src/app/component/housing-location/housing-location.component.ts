import { CartService } from './../../service/cart/cart.service';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../../interface/housinglocation';
import { RouterModule } from '@angular/router';
import { FeatherIconsModule } from '../icons/icons.component';
import { ToastService } from 'src/app/service/toast/toast.service';
@Component({
  // Khai báo selector cho component
  // có thể gọi đến selector này giống như thẻ html 
  // (<app-housing-location></app-housing-location>)
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule,FeatherIconsModule],
  // Khai báo file html mà component "đại diện" (hay còn gọi là view/template của Component)
  // hoặc import file htmmlml
  templateUrl: './housing-location.component.html',
  // Khai báo file style mà component này sẽ sử dụng
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
  constructor(private cartService:CartService,private toastService: ToastService){}
  // @ViewChild('liveToastBtn') toastTrigger!: ElementRef;
 
  addHouseToCart(housingLocation: Housinglocation){
    this.cartService.AddCartList(housingLocation);
    this.toastService.show('Đã thêm vào giỏ hàng!', 'success');
  }
}
