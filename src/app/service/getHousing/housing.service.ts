import { Housinglocation } from '../../interface/housinglocation';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';
 
  constructor() { 
    
  }
 async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);  
    return await data.json()??[];
  }
 async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data= await fetch(`${this.url}/${id}`);
    return await data.json() ??{};
  // }
  // submitApplication(firstName:string,lastName:string, email:string){
  //   this._snackBar.open(firstName +'\n' + lastName+'\n'+ email,'Đóng',{
  //     duration:2000,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'top'
  //   });
  }
}
