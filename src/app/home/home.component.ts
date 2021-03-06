import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { ICity, IForecast, IWeather } from 'src/libs';
import { CityService } from 'src/libs/shared-data/services/city.service';
import { ForecastService } from 'src/libs/shared-data/services/forecast.service';
import { MenuService } from 'src/libs/shared-data/services/menu.service';
import { WeatherService } from 'src/libs/shared-data/services/weather.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  cityData: ICity[] = [];
  cityData$: Observable<ICity[]>;
  hourlyForecastData$: Observable<IForecast> = of(null as any);
  menuCollapse$: Observable<boolean>;
  selectedCityImageUrl = '';
  citySubs!: Subscription;
  constructor(
    private readonly weatherService: WeatherService,
    private readonly forecastService: ForecastService,
    private readonly cityService: CityService,
    private readonly menuService: MenuService
  ) {
    this.cityData$ = cityService.data;
    this.hourlyForecastData$ = forecastService.data;
    this.menuCollapse$ = menuService.collapse;
  }

  ngOnInit() {
    this.weatherService.setApiKey(environment.api.weather_api.key);
    this.forecastService.setApiKey(environment.api.forecast_api.key);
    this.cityService.loadCities();
    this.getWeatherData();
  }

  ngOnDestroy(): void {
    this.forecastService.resetData();
    this.citySubs.unsubscribe();
  }

  getWeatherData(): void {
    this.citySubs = this.cityData$.subscribe((resp) => {
      if (resp.length > 0) {
        this.cityData = resp;
        for (const city of resp) {
          this.weatherService.setCity(city?.name);
          const cityIndex = this.cityData.findIndex(
            (el) => el.name === city.name
          );
          this.cityData[cityIndex].weather = this.weatherService.simpleList();
        }
      }
    });
  }

  getCityDetail(event: { coord: { lat: number; lon: number }; name: string }) {
    const selectedCityIndex = environment.wide_images.findIndex((elem) => {
      return elem.name === event.name.toLowerCase();
    });
    const defaultCityIndex = environment.wide_images.findIndex((elem) => {
      return elem.name === 'default';
    });
    this.selectedCityImageUrl =
      selectedCityIndex > -1
        ? environment.wide_images[selectedCityIndex].imageUrl
        : environment.wide_images[defaultCityIndex].imageUrl;
    this.forecastService.setLat(event?.coord?.lat);
    this.forecastService.setLon(event?.coord?.lon);
    this.forecastService.setExclude('minutely');
    this.forecastService.list();
  }
}
