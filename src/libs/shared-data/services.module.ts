import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CityService } from './services/city.service';
import { WeatherService } from './services/weather.service';
import { MenuService } from './services/menu.service';
import { ForecastService } from './services/forecast.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class ServicesModule {
  constructor(@Optional() @SkipSelf() parentModule: ServicesModule) {
    if (parentModule) {
      throw new Error(
        'ServicesModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(environment: any): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [
        CityService,
        WeatherService,
        ForecastService,
        MenuService,
        { provide: 'environment', useValue: environment },
      ],
    };
  }
}
