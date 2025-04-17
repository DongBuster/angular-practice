import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Housinglocation } from '../../interface/housinglocation';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filteredLocationsSource = new BehaviorSubject<Housinglocation[]>([]);
  filteredLocations$ = this.filteredLocationsSource.asObservable();

  updateFilteredLocations(locations: Housinglocation[]) {
    this.filteredLocationsSource.next(locations);
  }
  
} 