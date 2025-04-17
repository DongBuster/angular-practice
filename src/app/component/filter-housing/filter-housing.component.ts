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
  selectedValue = 'All'
  constructor(private filterService:FilterService){
    this.housingService.getAllHousingLocations().subscribe((housingList)=>{
      // this.housingLocationList = housingList
      // this.filterHousingList = housingList
      // this.filterService.updateFilteredLocations(this.filterHousingList)
    })
  }
 
  filterIncrease(event:Event){
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      const list = [...this.filterHousingList].sort((a, b) => a.price - b.price);
      this.filterService.updateFilteredLocations(list);

    } else {
      this.filterService.updateFilteredLocations(this.filterHousingList);
    }
 
  }
  filterDecrease(event:Event){
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      const list = [...this.filterHousingList].sort((a, b) => b.price - a.price);
      this.filterService.updateFilteredLocations(list);

    } else {
      this.filterService.updateFilteredLocations(this.filterHousingList);
    }
 
  }

  filterRange(){
    if(this.selectedValue == 'All'){
      this.filterHousingList = [...this.housingLocationList];
      this.filterService.updateFilteredLocations(this.filterHousingList)
    } else{
      const range = this.selectedValue.split('-');
      const min = parseInt(range[0]);
      const max = parseInt(range[1]);
      this.filterHousingList = [...this.housingLocationList].filter((item)=> item.price >=min && item.price <=max)
      this.filterService.updateFilteredLocations(this.filterHousingList)
    }
  }

}
