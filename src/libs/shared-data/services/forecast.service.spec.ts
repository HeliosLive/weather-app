import { inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ForecastService } from './forecast.service';
import { environment } from 'src/environments/environment';
import { IForecast } from 'src/libs/interfaces/forecast.interface';

describe('ForecastService', () => {
  let service: ForecastService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ForecastService],
    });
    service = TestBed.inject(ForecastService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should be able to set Latitude ', () => {
    const lat = 48.8534;
    service.setLat(lat);
    service.queryParams.subscribe((resp) => {
      expect(resp.lat).toEqual(lat);
    });
  });

  it('it should be able to set Longitude ', () => {
    const lon = 2.3488;
    service.setLon(lon);
    service.queryParams.subscribe((resp) => {
      expect(resp.lon).toEqual(lon);
    });
  });

  it('it should be able to set Exclude period', () => {
    service.setExclude('minutely');
    service.queryParams.subscribe((resp) => {
      expect(resp.exclude).toEqual('minutely');
    });
  });

  it('it should be able to set api key', () => {
    service.setApiKey(environment.api.weather_api.key);
    service.queryParams.subscribe((resp) => {
      expect(resp.appid).toEqual(environment.api.weather_api.key);
    });
  });

  it('it should send a request for city named Paris and get response', () => {
    const mockForecastData: IForecast = {
      id: 2988507,
      timezone: '3600',
      lon: 2.3488,
      lat: 48.8534,
      hourly: [
        {
          dt: 1615118400,
          temp: 281.47,
          feels_like: 277.22,
          pressure: 1023,
          humidity: 39,
          dew_point: 268.88,
          uvi: 2.37,
          clouds: 0,
          visibility: 10000,
          wind_speed: 2.37,
          wind_deg: 53,
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          pop: 0,
        },
        {
          dt: 1615122000,
          temp: 281.9,
          feels_like: 278.04,
          pressure: 1023,
          humidity: 43,
          dew_point: 270.38,
          uvi: 2.15,
          clouds: 0,
          visibility: 10000,
          wind_speed: 2.09,
          wind_deg: 50,
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          pop: 0,
        },
      ],
    };
    service.resetData();
    service.setApiKey(environment.api.weather_api.key);
    service.setLat(mockForecastData.lat);
    service.setLon(mockForecastData.lon);
    service.setExclude('minutely');
    service.setData(mockForecastData);
    service.list();
    service.data.subscribe((resp) => {
      expect(mockForecastData).toEqual(resp);
    });
    const req = httpMock.expectOne(
      `${environment.api.forecast_api.host}/${environment.api.forecast_api.version}/${environment.api.forecast_api.endpoint}?lat=${mockForecastData.lat}&lon=${mockForecastData.lon}&exclude=minutely&appid=${environment.api.weather_api.key}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockForecastData);
  });

  it('it should be able to return forecast result for Istanbul', () => {
    const mockForecastData: IForecast = {
      id: 745042,
      timezone: '3600',
      lon: 28.9833,
      lat: 41.0351,
      hourly: [
        {
          dt: 1615118400,
          temp: 280.15,
          feels_like: 274.26,
          pressure: 1026,
          humidity: 57,
          dew_point: 272.33,
          uvi: 2.32,
          clouds: 75,
          visibility: 10000,
          wind_speed: 5.39,
          wind_deg: 53,
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          pop: 0,
        },
        {
          dt: 1615122000,
          temp: 279.97,
          feels_like: 274.3,
          pressure: 1026,
          humidity: 59,
          dew_point: 272.6,
          uvi: 1.55,
          clouds: 83,
          visibility: 10000,
          wind_speed: 5.13,
          wind_deg: 53,
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          pop: 0,
        },
      ],
    };
    service.resetData();
    service.setApiKey(environment.api.weather_api.key);
    service.setLat(mockForecastData.lat);
    service.setLon(mockForecastData.lon);
    service.setExclude('minutely');
    service.setData(mockForecastData);
    service.list();
    service.data.subscribe((resp) => {
      expect(mockForecastData).toEqual(resp);
    });

    const req = httpMock.expectOne(
      `${environment.api.forecast_api.host}/${environment.api.forecast_api.version}/${environment.api.forecast_api.endpoint}?lat=${mockForecastData.lat}&lon=${mockForecastData.lon}&exclude=minutely&appid=${environment.api.weather_api.key}`
    );

    expect(req.request.method).toBe('GET');
    req.flush(mockForecastData);
  });

  // it('it should not be able to return forecast result for empty data', () => {
  //   const mockForecastData: IForecast = {} as IForecast;
  //   service.resetData();
  //   service.setApiKey(environment.api.weather_api.key);
  //   service.setExclude('minutely');
  //   service.setData(mockForecastData);
  //   service.list();
  //   service.data.subscribe((resp) => {
  //     expect(mockForecastData).toEqual(resp);
  //   });

  // tslint:disable-next-line:max-line-length
  //   const fakeUrl = `${environment.api.forecast_api.host}/${environment.api.forecast_api.version}/${environment.api.forecast_api.endpoint}`;
  // tslint:disable-next-line:max-line-length
  //   const correctUrl = `${environment.api.forecast_api.host}/${environment.api.forecast_api.version}/${environment.api.forecast_api.endpoint}?lat=0&lon=0&exclude=minutely&appid=${environment.api.weather_api.key}`;
  //   const req = httpMock.expectOne(fakeUrl);

  //   expect(req.request.method).not.toBe('POST');
  //   expect(req.request.url).not.toEqual(correctUrl);
  //   req.flush(mockForecastData);
  // });
});
