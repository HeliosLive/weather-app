import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IForecast } from 'src/libs/interfaces/forecast.interface';
import { ResourceService } from './resource.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ForecastService extends ResourceService<IForecast> {
  // from now we know this service determine & return to us IWeather interface response
  constructor(
    protected http: HttpClient // @Inject('environment') protected environment: any
  ) // according to angular guide unit test injection environment causes http request controls
  {
    super(http, 'forecast_api', environment);
  }
}
