import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
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
      imageUrl: '../../../assets/images/paris.jpg',
    },
    {
      id: 2,
      name: 'Amsterdam',
      country: 'Netherlands',
      iso_code: 528,
      imageUrl: '../../../assets/images/amsterdam.jpg',
    },
    {
      id: 3,
      name: 'Berlin',
      country: 'Germany',
      iso_code: 276,
      imageUrl: '../../../assets/images/berlin.jpg',
    },
    {
      id: 4,
      name: 'London',
      country: 'UK',
      iso_code: 826,
      imageUrl: '../../../assets/images/london.jpg',
    },
    {
      id: 5,
      name: 'Istanbul',
      country: 'Turkey',
      iso_code: 792,
      imageUrl: '../../../assets/images/istanbul.jpg',
    },
  ];

  constructor() {}

  loadCities() {
    this.data$.next(this.cities);
  }

  addCity(city: ICity): boolean {
    city.id = this.cities.length + 1;
    const cityIndex = this.cities.findIndex(
      (el) => el.name.toLowerCase() === city.name.toLowerCase()
    );
    if (cityIndex === -1) {
      this.cities.push(city);
      return true;
    } else {
      return false;
    }
  }
}
