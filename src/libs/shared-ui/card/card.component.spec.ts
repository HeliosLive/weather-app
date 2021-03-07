import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import {
  IgxIconModule,
  IgxCardModule,
  IgxRippleModule,
} from 'igniteui-angular';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IWeather } from 'src/libs/interfaces/weather.interface';
import { TimestampDateFormatPipe } from 'src/libs/pipes/timestamp-date-format.pipe';
import { TemperatureConverterPipe } from 'src/libs/pipes/temperature-converter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ICityDetail } from 'src/libs/interfaces/city-detail.interface';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let submitEl: DebugElement;
  let imageEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        IgxIconModule,
        IgxCardModule,
        IgxRippleModule,
      ],
      declarations: [
        CardComponent,
        TimestampDateFormatPipe,
        TemperatureConverterPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should create button text with getting @Input from outside', () => {
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
    const text = 'Click for Detail!';
    component.btnText = text;
    component.weatherData = mockWeatherData;
    fixture.detectChanges();
    submitEl = fixture.debugElement.query(By.css('.cardActionButton'));

    expect(submitEl.nativeElement.textContent.toString().trim()).toEqual(
      text.trim()
    );
  });

  it('It should create a card with weather data and an image', () => {
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
    const imageUrl = '../../../assets/images/paris.jpg';
    const text = 'Click for Detail!';
    component.btnText = text;
    component.weatherData = mockWeatherData;
    component.imgUrl = imageUrl;
    fixture.detectChanges();
    imageEl = fixture.debugElement.query(By.css('.cardVirtualImage'));

    expect(imageEl.nativeElement).toBeTruthy();
  });

  it('It should create a card with weather data and a button', () => {
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
    const imageUrl = '../../../assets/images/paris.jpg';
    const text = 'Click for Detail!';
    component.btnText = text;
    component.weatherData = mockWeatherData;
    component.imgUrl = imageUrl;
    fixture.detectChanges();
    submitEl = fixture.debugElement.query(By.css('.cardActionButton'));

    expect(submitEl.nativeElement).toBeTruthy();
  });

  it('It should be able to click the button and listen output', () => {
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
    const cityDetail: ICityDetail = {
      name: 'Paris',
      coord: {
        lat: 48.8534,
        lon: 2.3488,
      },
    };
    const imageUrl = '../../../assets/images/paris.jpg';
    const text = 'Click for Detail!';
    component.btnText = text;
    component.weatherData = mockWeatherData;
    component.imgUrl = imageUrl;
    fixture.detectChanges();

    submitEl = fixture.debugElement.query(By.css('.cardActionButton'));
    spyOn(component.cardSubmit, 'emit');
    submitEl.nativeElement.click();
    expect(component.cardSubmit.emit).toHaveBeenCalledWith(cityDetail);
  });
});
