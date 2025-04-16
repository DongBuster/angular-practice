import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Housinglocation } from 'src/app/interface/housinglocation';
import { FilterService } from 'src/app/service/filter/filter.service';
import { HousingService } from 'src/app/service/getHousing/housing.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter-housing',
  standalone:true,
  imports:[
    FormsModule
  ],
  templateUrl: './filter-housing.component.html',
  styleUrls: ['./filter-housing.component.css']
})
export class FilterHousingComponent {
  housingLocationList: Housinglocation[]=[]
  housingService:HousingService = inject(HousingService)
  filterHousingList: Housinglocation[]=[]

  constructor(private filterService:FilterService){
    this.housingService.getAllHousingLocations().then((housingList)=>{
      this.housingLocationList = housingList
      this.filterHousingList = housingList
      this.filterService.updateFilteredLocations(this.filterHousingList)
    })
  }
 
  filterIncrease(event:Event){
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.filterHousingList = [...this.housingLocationList].sort((a, b) => a.price - b.price);
    } else {
      this.filterHousingList = [...this.housingLocationList];
    }
    // Cập nhật cho service nếu cần dùng
    this.filterService.updateFilteredLocations(this.filterHousingList);
  }
  filterDecrease(event:Event){
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.filterHousingList = [...this.housingLocationList].sort((a, b) => b.price - a.price);
    } else {
      this.filterHousingList = [...this.housingLocationList];
    }
    // Cập nhật cho service nếu cần dùng
    this.filterService.updateFilteredLocations(this.filterHousingList);
  }

}
