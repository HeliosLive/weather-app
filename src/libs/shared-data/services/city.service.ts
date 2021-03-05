import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICity } from 'src/libs/interfaces/city.interface';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  // Due to there is no endpoint for cities we cant extend this service from resource.service for now!
  private data$: BehaviorSubject<ICity[]> = new BehaviorSubject(null as any);
  data = this.data$.asObservable();
  cities: ICity[] = [
    {
      id: 1,
      name: 'Paris',
      country: 'France',
      iso_code: 250,
    },
    {
      id: 2,
      name: 'Amsterdam',
      country: 'Netherlands',
      iso_code: 528,
    },
    {
      id: 3,
      name: 'Berlin',
      country: 'Germany',
      iso_code: 276,
    },
    {
      id: 4,
      name: 'Madrid',
      country: 'Spain',
      iso_code: 724,
    },
    {
      id: 5,
      name: 'Roma',
      country: 'Italy',
      iso_code: 380,
    },
    {
      id: 6,
      name: 'Istanbul',
      country: 'Turkey',
      iso_code: 792,
    },
  ];

  constructor() {}

  loadCities() {
    this.data$.next(this.cities);
  }

  addCity(city: ICity) {
    city.id = this.cities.length + 1;
    this.cities.push(city);
  }
}
