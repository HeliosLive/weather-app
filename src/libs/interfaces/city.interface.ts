import { Observable } from 'rxjs';
import { IWeather } from './weather.interface';

export interface ICity {
  id?: number;
  name: string;
  country?: string;
  iso_code?: number;
  imageUrl?: string;
  weather?: Observable<IWeather>;
}
