import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IForecast } from 'src/libs/interfaces/forecast.interface';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root',
})
export class ForecastService extends ResourceService<IForecast> {
  // from now we know this service determine & return to us IWeather interface response
  constructor(
    protected http: HttpClient,
    @Inject('environment') protected environment: any
  ) {
    super(http, 'forecast_api', environment);
  }
}
