import { inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { environment } from 'src/environments/environment';
import { IWeather } from 'src/libs/interfaces/weather.interface';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should be able to set city name', () => {
    service.setCity('Paris');
    service.queryParams.subscribe((resp) => {
      expect(resp.q).toEqual('Paris');
    });
  });

  it('it should be able to set api key', () => {
    service.setApiKey(environment.api.weather_api.key);
    service.queryParams.subscribe((resp) => {
      expect(resp.appid).toEqual(environment.api.weather_api.key);
    });
  });

  it('it should send a request for city named Paris and get response', () => {
    const mockWeatherData: IWeather = {
      coord: {
        lon: 2.3488,
        lat: 48.8534,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      base: 'stations',
      main: {
        temp: 279.61,
        feels_like: 273.35,
        temp_min: 277.59,
        temp_max: 281.48,
        pressure: 1024,
        humidity: 42,
      },
      visibility: 10000,
      wind: {
        speed: 5.14,
        deg: 30,
      },
      clouds: {
        all: 0,
      },
      dt: 1615115883,
      sys: {
        type: 1,
        id: 6550,
        country: 'FR',
        sunrise: 1615098034,
        sunset: 1615138976,
      },
      timezone: 3600,
      id: 2988507,
      name: 'Paris',
      cod: 200,
    };
    service.setApiKey(environment.api.weather_api.key);
    service.setCity('Paris');
    service.simpleList().subscribe((resp) => {
      expect(mockWeatherData).toEqual(resp);
    });

    const req = httpMock.expectOne(
      `${environment.api.weather_api.host}/${environment.api.weather_api.version}/${environment.api.weather_api.endpoint}?q=Paris&appid=${environment.api.weather_api.key}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockWeatherData);
  });

  it('it should be able to return forecast result for Istanbul', () => {
    const mockWeatherData: IWeather = {
      coord: {
        lon: 28.9833,
        lat: 41.0351,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      base: 'stations',
      main: {
        temp: 279.68,
        feels_like: 272.33,
        temp_min: 279.15,
        temp_max: 280.15,
        pressure: 1027,
        humidity: 53,
      },
      visibility: 10000,
      wind: {
        speed: 7.2,
        deg: 50,
      },
      clouds: {
        all: 75,
      },
      dt: 1615115509,
      sys: {
        type: 1,
        id: 6970,
        country: 'TR',
        sunrise: 1615091344,
        sunset: 1615132884,
      },
      timezone: 10800,
      id: 745042,
      name: 'Istanbul',
      cod: 200,
    };
    service.setApiKey(environment.api.weather_api.key);
    service.setCity('Istanbul');
    service.simpleList().subscribe((resp) => {
      expect(mockWeatherData).toEqual(resp);
    });

    const req = httpMock.expectOne(
      `${environment.api.weather_api.host}/${environment.api.weather_api.version}/${environment.api.weather_api.endpoint}?q=Istanbul&appid=${environment.api.weather_api.key}`
    );

    expect(req.request.method).toBe('GET');
    req.flush(mockWeatherData);
  });
});
