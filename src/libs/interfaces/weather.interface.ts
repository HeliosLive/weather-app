export interface IWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: 10000;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

//   example response
//     "coord": {
//         "lon": -3.7026,
//         "lat": 40.4165
//     },
//     "weather": [
//         {
//             "id": 801,
//             "main": "Clouds",
//             "description": "few clouds",
//             "icon": "02d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 287.95,
//         "feels_like": 285.56,
//         "temp_min": 287.04,
//         "temp_max": 289.26,
//         "pressure": 1016,
//         "humidity": 55
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 2.06,
//         "deg": 0
//     },
//     "clouds": {
//         "all": 20
//     },
//     "dt": 1614961012,
//     "sys": {
//         "type": 1,
//         "id": 6443,
//         "country": "ES",
//         "sunrise": 1614926548,
//         "sunset": 1614967824
//     },
//     "timezone": 3600,
//     "id": 3117735,
//     "name": "Madrid",
//     "cod": 200
// }
