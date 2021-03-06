export const environment = {
  production: false,
  api: {
    weather_api: {
      host: 'https://api.openweathermap.org/data',
      version: '2.5',
      endpoint: 'weather',
      key: 'c61012668182aa25367c3ceda9ec925f',
      spare_key: 'd216488ac11d049c6c13b0ba41da0f80',
    },
    forecast_api: {
      host: 'https://api.openweathermap.org/data',
      version: '2.5',
      endpoint: 'onecall',
      key: 'c61012668182aa25367c3ceda9ec925f',
      spare_key: 'd216488ac11d049c6c13b0ba41da0f80',
    },
    // city_api: {
    //   host: 'http://api.openweathermap.org/data/2.5',
    //   endpoint: 'cities',
    // },
  },
  wide_images: [
    {
      name: 'amsterdam',
      imageUrl: '../../../assets/images/amsterdam-wide.png',
    },
    {
      name: 'berlin',
      imageUrl: '../../../assets/images/berlin-wide.png',
    },
    {
      name: 'istanbul',
      imageUrl: '../../../assets/images/istanbul-wide.png',
    },
    {
      name: 'paris',
      imageUrl: '../../../assets/images/paris-wide.png',
    },
    {
      name: 'london',
      imageUrl: '../../../assets/images/london-wide.png',
    },
    {
      name: 'default',
      imageUrl: '../../../assets/images/europe-wide.png',
    },
  ],
};
