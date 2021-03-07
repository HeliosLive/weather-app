# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

### Api

I've used [Open Weather Api](https://openweathermap.org/) to make forecast api calls.

## Demo

In order to make this app user friendly and eye appealing a few images have been used. If you find it slow please be patient :)
[Demo](https://europe-weather-app.herokuapp.com/) is running on heroku right now.

> It is a free account. Thus, after 30min inactiveness it goes to sleep. Please wait for initial run.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## App features

- Displaying current weather for 5 cities and hourly forecast.
- Search any city by name and if result come up you can add that city into existing cities.
- Open weather api integration (current & hourly)

## Prerequisites

Install Node.js® and npm

node -v

npm -v

Install Angular cli

npm install -g @angular/cli

Clone the repository into your environment

Go to that directory via terminal ( cd /go/to/app/weather-app )

Install node packages (npm install)

## Deploy on heroku

> Go to [Heroku](https://id.heroku.com/login) and after signed in create a new personal app but don't forget! App environment has to based on nodejs.

- Install enhanced-resolve#3.3.0(-dev) & express & path into the app and make sure added to your package.json file.
- Then, add "start:prod": "node server.js" script into your package.json file and create a Procfile which includes `web: npm run start:prod` command.
- Later, create a server.js file to be able to run your app on server. (you can copy paste from ours but don't forget to change the app name)
- After these steps your app runs via express on heroku nodejs environment.
  > When everything is done you can connect your github app repository to your heroku application to able to build after every commit into specific branch. (If your repo isn't on github you can use heroku cli instead of github)

## tools that been used

- Twitter bootstrap for responsive structure. (npm i bootstrap then add style url to style.scss file)

  > You don't need to implement all css and js files because we are using ignite-ui for component styles. Just add grid css.

- Ignite ui for material component UI. (ng add igniteui-angular) [Ignite UI](https://www.infragistics.com/products/ignite-ui-angular)
  team seperated all components by module so everytime you try to use some component don't forget to add the module

  > (e.g. to be able to use igx-icon tag first you need to import IgxIconModule into your feature module)

- ngx-toastr for action alerts. (npm i ngx-toastr then add style file url into styles array inside of angular.json)
  > You can create custom toastr style file into assets folder and make your own customization then don't forget to add that file into style.scss

# End User Guide

- After you open the website you will face with home page directly and see a carousel includes 5 cities data.
- It's an **autoplay slider** after a couple of seconds slide changes (if you hover the card **autoplay will pause**). However you can click any bullet to change slides.
- Inside of this carousel you will see city data card and a button bottom of the card which makes you see hourly selected city forecast.

- In addition, there is a search tab as well. If you click the hamburger menu button at top left you can open the menu.
  > (Also there is a css trick animation between main page and sidebar after clickling menu button. I hope you find amusing)
- Inside of search page you will see a simple input says to you 'type a city name'.
- After you wrote the city name that you wanted, A result card might come up below the input. (of course if it exists..)
- You can easily see the current forecast and be able to add that city to click add city button.

# Developers Guide

Basically, I've used lazy loading and feature modules to create a smooth Architecture.
We have 2 pages home and Search. Each component has their own module and route mechanism.

- I've seperated app and libs at first. My goal was seperate reusable components/directives/pipes/services etc from main smart components.
- Then I draw a few templates for pages so I realized I need to use same component types more than one page.
  > That's why I created shared-ui folder and split big components into small pieces..
- After that import into other lazy loading feature modules. To make it reusable and generic.
- Components structure based on service's behaviourSubjects, output and input instead of ngRx pattern because it's a small application we don't need to.

- I've added endpoint urls into environment files to inject to service because of safely/easily/convenient usage.

- I've created base service to initialize all service calls and manage all request from one place. Thus we can intercept it easily and change error messages or data.

  > Also considering simple crud operations It'd be better to create one resource service and use singleton pattern.

- After network calls api returns data differently so I've created 2 pipes to use everywhere and those are timestamp-date-format and Kelvin to Celcius temperature-converter pipes.

## Custom directive unit test

Create a custom directive only job is **highlighted the tag** when you hover it. You can add color or default yellow.

> `ng test --include="src/libs/directives/highlight.directive.spec.ts"`
> ![Demo](https://res.cloudinary.com/dlth9ls92/image/upload/v1615066708/directive-unit-test.gif)

## Custom pipe unit test

We have two custom pipes for testing and their jobs are: First, **converting temperature** between Kelvin and Celcius. Second, **convert date** from timestamp to 'hh:mm'.

> `ng test --include="src/libs/pipes/temperature-converter.pipe.spec.ts"`

```javascript
describe("TemperatureConverterPipe", () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new TemperatureConverterPipe();

  it('transforms "Kelvin" to "Celcius"', () => {
    const celciusValue = 22;
    const kelvinValue = Math.round(celciusValue + 273.15);
    expect(pipe.transform(celciusValue, "K")).toEqual(kelvinValue);
  });

  it('transforms "Celcius" to "Kelvin"', () => {
    const kelvinValue = 290;
    const celciusValue = Math.round(kelvinValue - 273.15);
    expect(pipe.transform(kelvinValue, "C")).toEqual(celciusValue);
  });
});
```

> `ng test --include="src/libs/pipes/timestamp-date-format.pipe.spec.ts"`

```javascript
describe("TimestampDateFormatPipe", () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new TimestampDateFormatPipe();

  it('transforms date from timestamp to "hh:mm"', () => {
    const timeStampDate = 1615122000;
    const hourDate = "14:00";
    expect(pipe.transform(timeStampDate)).toBe(hourDate);
  });
});
```

## Service unit test

Create a service only job is load the cities function and add a new city.
Add a couple of simple return value and subscriptions as like below.

> `ng test --include="src/libs/shared-data/services/city.service.spec.ts"`

```javascript
it("It should return 5 element length long mock cities array data after loaded", () => {
  service.loadCities();
  service.data.subscribe((res) => {
    expect(res.length).toEqual(5);
  });
});

it("It should return true after adding a new city into mock cities array", () => {
  service.loadCities();
  const result = service.addCity({ name: "Prag" });
  expect(result).toBe(true);
});

it("It should return false after adding existing city into mock cities array", () => {
  service.loadCities();
  const result = service.addCity({ name: "Istanbul" });
  expect(result).toBe(false);
});
```

Create a service this time really does **api calls** with open weather api. But it's not just a simple call service this is an extend service from another service so kind a challenging.

> Clue is dont forget to add { useValue: environment } into providers.
> Add a couple of simple return value and subscriptions as like below.
> `ng test --include="src/libs/shared-data/services/weather.service.spec.ts"`

```javascript
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

  it('it should send a request for city named Paris', () => {
    const mockWeatherData: IWeather = {name:"Paris"...}
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
    const mockWeatherData: IWeather = {name:"Istanbul"...}

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
```

## Dummy Components Test

This type of components have only **one job** which is If component receives correct format data it shows them.
You can see a couple of input and output data check.

component.ts ,

```javascript
export class CardComponent implements OnInit {
  @Input() weatherData!: IWeather;
  @Input() imgUrl!: string;
  @Input() btnText = 'click';
  @Output() cardSubmit: EventEmitter<ICityDetail> = new EventEmitter();

 constructor() {}

  ngOnInit(): void {}
}

```

component.spec.ts ,

```javascript

  it('It should create button text with getting @Input from outside', () => {
   const mockWeatherData: IWeather = {
      coord: {
        lon: 2.3488,
        lat: 48.8534,
      },
      .
      .
      .
      id: 2988507,
      name: 'Paris'
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

it('It should create a card with weather data and a button', () => {
    const mockWeatherData: IWeather = {
      coord: {
        lon: 2.3488,
        lat: 48.8534,
      },
      .
      .
      .
      id: 2988507,
      name: 'Paris'
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
      .
      .
      .
      id: 2988507,
      name: 'Paris'
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

```

## Dummy Components with Input Test

This is still a dummy component however, we want to make sure input typing works.

```javascript
it("should have search template after initialized", () => {
  tagEl = fixture.debugElement.query(By.css(".actionSearchInput"));
  expect(tagEl.nativeElement).toBeTruthy();
});

it("should have type in search input", () => {
  tagEl = fixture.debugElement.query(By.css(".actionSearchInput"));
  expect(tagEl.nativeElement).toBeTruthy();

  tagEl.nativeElement.value = "I am typing a city name";
  tagEl.nativeElement.dispatchEvent(new Event("input"));
  expect(tagEl.nativeElement.value).toBe("I am typing a city name");
});

it("should form controller set value changes the input value", () => {
  tagEl = fixture.debugElement.query(By.css(".actionSearchInput"));
  expect(tagEl.nativeElement).toBeTruthy();

  // patch value or set value both works fine!
  component.createForm.controls.name.setValue("Random City Name");

  expect(tagEl.nativeElement.value).toBe("Random City Name");
});
```
