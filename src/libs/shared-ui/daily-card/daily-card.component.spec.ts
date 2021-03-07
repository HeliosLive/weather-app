import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCardComponent } from './daily-card.component';
import {
  IgxIconModule,
  IgxCardModule,
  IgxRippleModule,
} from 'igniteui-angular';
import { IForecast } from 'src/libs/interfaces/forecast.interface';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TimestampDateFormatPipe } from 'src/libs/pipes/timestamp-date-format.pipe';
import { TemperatureConverterPipe } from 'src/libs/pipes/temperature-converter.pipe';

describe('DailyCardComponent', () => {
  let component: DailyCardComponent;
  let fixture: ComponentFixture<DailyCardComponent>;
  let imageEl: DebugElement;
  let textEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgxIconModule, IgxCardModule, IgxRippleModule],
      declarations: [
        DailyCardComponent,
        TimestampDateFormatPipe,
        TemperatureConverterPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should show city name with getting @Input from outside', () => {
    const mockForecastData: IForecast = {
      lat: 51.5085,
      lon: -0.1257,
      timezone: 'Europe/London',
      hourly: [
        {
          dt: 1615140000,
          temp: 277.81,
          feels_like: 274.14,
          pressure: 1025,
          humidity: 52,
          dew_point: 269.3,
          uvi: 0,
          clouds: 0,
          visibility: 10000,
          wind_speed: 1.61,
          wind_deg: 26,
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          pop: 0,
        },
        {
          dt: 1615143600,
          temp: 278.1,
          feels_like: 275.04,
          pressure: 1025,
          humidity: 58,
          dew_point: 270.84,
          uvi: 0,
          clouds: 0,
          visibility: 10000,
          wind_speed: 1.03,
          wind_deg: 43,
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          pop: 0,
        },
      ],
    };
    const cityName = 'London';
    const imageUrl = '../../../assets/images/london.jpg';
    component.cityName = cityName;
    component.imageUrl = imageUrl;
    component.forecastData = mockForecastData;
    fixture.detectChanges();
    textEl = fixture.debugElement.query(By.css('h2'));

    expect(textEl.nativeElement.textContent.toString().trim()).toEqual(
      cityName.trim()
    );
  });

  it('It should show the image with getting @Input type IForecast', () => {
    const mockForecastData: IForecast = {
      lat: 51.5085,
      lon: -0.1257,
      timezone: 'Europe/London',
      hourly: [
        {
          dt: 1615140000,
          temp: 277.81,
          feels_like: 274.14,
          pressure: 1025,
          humidity: 52,
          dew_point: 269.3,
          uvi: 0,
          clouds: 0,
          visibility: 10000,
          wind_speed: 1.61,
          wind_deg: 26,
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          pop: 0,
        },
        {
          dt: 1615143600,
          temp: 278.1,
          feels_like: 275.04,
          pressure: 1025,
          humidity: 58,
          dew_point: 270.84,
          uvi: 0,
          clouds: 0,
          visibility: 10000,
          wind_speed: 1.03,
          wind_deg: 43,
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          pop: 0,
        },
      ],
    };
    const cityName = 'London';
    const imageUrl = '../../../assets/images/london.jpg';
    component.cityName = cityName;
    component.imageUrl = imageUrl;
    component.forecastData = mockForecastData;
    fixture.detectChanges();
    imageEl = fixture.debugElement.query(By.css('.cardVirtualImage'));

    expect(imageEl.nativeElement).toBeTruthy();
  });

  it('It should create hourly forecast list into card', () => {
    const mockForecastData: IForecast = {
      lat: 51.5085,
      lon: -0.1257,
      timezone: 'Europe/London',
      hourly: [
        {
          dt: 1615140000,
          temp: 277.81,
          feels_like: 274.14,
          pressure: 1025,
          humidity: 52,
          dew_point: 269.3,
          uvi: 0,
          clouds: 0,
          visibility: 10000,
          wind_speed: 1.61,
          wind_deg: 26,
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          pop: 0,
        },
        {
          dt: 1615143600,
          temp: 278.1,
          feels_like: 275.04,
          pressure: 1025,
          humidity: 58,
          dew_point: 270.84,
          uvi: 0,
          clouds: 0,
          visibility: 10000,
          wind_speed: 1.03,
          wind_deg: 43,
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          pop: 0,
        },
      ],
    };
    const cityName = 'London';
    const imageUrl = '../../../assets/images/london.jpg';
    component.cityName = cityName;
    component.imageUrl = imageUrl;
    component.forecastData = mockForecastData;
    fixture.detectChanges();
    const forecastList = fixture.debugElement.queryAll(
      By.css('.cardForecastList')
    );

    expect(forecastList.length).toEqual(2);
  });
});
