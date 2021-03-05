import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICity } from 'src/libs';
import { CityService } from 'src/libs/shared-data/services/city.service';
import { WeatherService } from 'src/libs/shared-data/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cityData: Observable<ICity[]>;
  constructor(
    private readonly weatherService: WeatherService,
    private readonly cityService: CityService
  ) {
    this.cityData = cityService.data;
  }

  ngOnInit() {
    this.cityService.loadCities();
  }
}
