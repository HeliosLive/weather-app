import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IWeather } from '../../interfaces/weather.interface';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService extends ResourceService<IWeather> {
  // from now we know this service determine & return to us IWeather interface response
  constructor(
    protected http: HttpClient,
    @Inject('environment') protected environment: any
  ) {
    super(http, 'weather_api', environment);
  }
}
