import { Component } from '@angular/core';
import { CartButtonComponent } from 'src/app/component/cart-button/cart-button.component';
import { SearchBarComponent } from 'src/app/component/search-bar/search-bar.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone:true,
  imports:
  [SearchBarComponent,CartButtonComponent,RouterModule,CommonModule],
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
    // Set route ban đầu
    this.currentRoute = this.router.url;
  }

  get isHomePage(): boolean {
    return this.currentRoute === '/';
  }

  get isCartPage(): boolean {
    return this.currentRoute.includes('/cart');
  }

  get isDetailPage(): boolean {
    return this.currentRoute.includes('/detail');
  }

}
