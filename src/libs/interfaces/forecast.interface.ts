export interface IForecast {
  id?: number;
  lon: number;
  lat: number;
  timezone: string;
  hourly: IForecastList[];
}

interface IForecastList {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  pop: number;
}
