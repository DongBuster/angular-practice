import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../../component/housing-location/housing-location.component';
import { Housinglocation } from '../../interface/housinglocation';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/service/search/search.service';
import { ToastComponent } from 'src/app/component/toast/toast.component';
import { ToastService } from 'src/app/service/toast/toast.service';
import { CarouselComponent } from 'src/app/component/carousel/carousel.component';

@Component({
  selector: 'app-home',  
  standalone: true,
  imports: [CommonModule, HousingLocationComponent,ToastComponent,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  filteredLocationList: Housinglocation[] = [];
  private subscription: Subscription = new Subscription();
    @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  
  constructor(private filterService:FilterService,private toastService: ToastService){}
  ngOnInit() {
   this.subscription = this.filterService.filteredLocations$.subscribe(housinglocation => {
      this.filteredLocationList = housinglocation;
    });
  }
  ngAfterViewInit() {
    this.toastService.register(this.toastComponent);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 
}
