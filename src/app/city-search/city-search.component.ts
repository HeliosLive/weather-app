import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ICity } from 'src/libs';
import { CityService } from 'src/libs/shared-data/services/city.service';
import { MenuService } from 'src/libs/shared-data/services/menu.service';
import { WeatherService } from 'src/libs/shared-data/services/weather.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss'],
})
export class CitySearchComponent implements OnInit {
  cityData = {} as ICity;
  menuCollapse$: Observable<boolean>;
  constructor(
    private readonly menuService: MenuService,
    private readonly weatherService: WeatherService,
    private readonly cityService: CityService,
    private toastr: ToastrService
  ) {
    this.menuCollapse$ = menuService.collapse;
  }

  ngOnInit(): void {
    this.weatherService.setApiKey(environment.api.weather_api.key);
  }

  citySearch(event: any) {
    this.weatherService.setCity(event?.formValue?.name);
    this.cityData.name = event?.formValue?.name;
    this.cityData.weather = this.weatherService.simpleList();
  }

  addCity(city: any) {
    const cityAdd = this.cityService.addCity(city);
    if (cityAdd) {
      this.toastr.success(`${city?.name} city successfully added!`, 'Success');
    } else {
      this.toastr.warning(`${city?.name} city already exist!`, 'Failed');
    }
  }
}
