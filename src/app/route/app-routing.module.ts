import { DetailHousingComponent } from '../view/detail-housing/detail-housing.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../view/home/home.component';
import { CartHousingComponent } from '../view/cart-housing/cart-housing.component';

const routesConfig: Routes = [
    { path: '', component: HomeComponent },         
    { path: 'detail/:id', component: DetailHousingComponent }, 
    { path: 'cart', component: CartHousingComponent }, 
  ];
  
export default routesConfig;