import { Component, inject } from '@angular/core';
import { FeatherIconsModule } from '../icons/icons.component';
import { Housinglocation } from 'src/app/interface/housinglocation';
import { HousingService } from 'src/app/service/getHousing/housing.service';
import { FilterService } from 'src/app/service/filter/filter.service';

@Component({
  selector: 'app-search-bar',
  standalone:true,
  imports:[
    FeatherIconsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList:Housinglocation[]=[];
   constructor(private filterService:FilterService){
       this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[])=>{
       this.housingLocationList = housingLocationList;
       this.filteredLocationList = housingLocationList;
       this.filterService.updateFilteredLocations(this.filteredLocationList);
     });
   }
   filterResults(text:string){
     if(!text) this.filteredLocationList  = this.housingLocationList;
     this.filteredLocationList = this.housingLocationList.filter(
       housinglocation => housinglocation?.city.toLowerCase().includes(text.toLowerCase())
     );
     this.filterService.updateFilteredLocations(this.filteredLocationList);

   }
}
