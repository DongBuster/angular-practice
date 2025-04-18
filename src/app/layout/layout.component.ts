import { Component } from '@angular/core';
import { CartButtonComponent } from 'src/app/component/cart-button/cart-button.component';
import { SearchBarComponent } from 'src/app/component/search-bar/search-bar.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../component/user-profile/user-profile.component';

@Component({
  selector: 'app-layout',
  standalone:true,
  imports:
  [SearchBarComponent,CartButtonComponent,RouterModule,CommonModule,UserProfileComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    // Theo dõi thay đổi route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.url;
    });
  }

  ngOnInit() {
    const isLogined = localStorage.getItem('login')
    if(isLogined == 'true'){
      this.router.navigate(['/home'])
    }else{
      this.router.navigate(['/'])
    }
    this.currentRoute = this.router.url;
  }

  get isAuthPage(): boolean {
    return this.currentRoute === '/';
  }
  get isHomePage(): boolean {
    return this.currentRoute.includes('/home');
  }

  get isCartPage(): boolean {
    return this.currentRoute.includes('/cart');
  }

  get isDetailPage(): boolean {
    return this.currentRoute.includes('/detail');
  }

}
