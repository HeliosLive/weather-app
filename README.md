# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Demo

In order to make this app user friendly and eye appealing a few images have been used. If you find it slow please forgive us :)
[Demo](https://europe-weather-app.herokuapp.com/) is running on heroku right now. It is a free account thus, after 30min inactiveness it goes to sleep. Please wait for initial run.

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

-Display 5 cities current weather and hourly forecast
-Search any city by name and if result come up you can add that city into existing cities.
-Open weather api integration (current & hourly)

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

Go to [Heroku](https://id.heroku.com/login) and after signed in create a new personal app but don't forget! App environment has to based on nodejs.
Install enhanced-resolve#3.3.0(-dev) & express & path into the app and make sure added to your package.json file.
Then, add "start:prod": "node server.js" script into your package.json file and create a Procfile which includes `web: npm run start:prod`
text.
Later, create a server.js file to be able to run your app on server. (you can copy paste from ours but don't forget to change the app name)
After these steps your app runs via express on heroku nodejs environment.
When everything is done you can connect your github app repository to your heroku application to able to build after every commit into specific branch. (If your repo isn't on github you can use heroku cli instead of github)

## tools that been used

Twitter bootstrap for responsive structure. (npm i bootstrap then add style url to style.scss file)
You don't need to implement all css and js files because we are using ignite-ui for component styles. Just add grid css.

Ignite ui for material component UI. (ng add igniteui-angular) [Ignite UI](https://www.infragistics.com/products/ignite-ui-angular)
Ignite team seperated all components by module thus everytime you try to use some component don't forget to add the module
(e.g. to be able to use igx-icon tag first you need to import IgxIconModule into your feature module)

ngx-toastr for action alerts. (npm i ngx-toastr then add style file url into styles array inside of angular.json)
You can create custom toastr style file into assets folder and make your own customization then don't forget to add that file into style.scss

# End User Guide

After you open the website you will face with home page directly and see a carousel includes 5 cities data.
It's an autoplay slider after a couple of seconds slide changes (if you hover the card autoplay will pause). However you can click any bullet to change slides.
Inside of this carousel you will see city data card and a button bottom of the card which makes you see hourly selected city forecast.

In addition, there is a search tab as well. If you click the hamburger menu button at top left you can open the menu.
Inside of search page you will see a simple input says to you 'type a city name'.
After you wrote the city name that you wanted, A result card might come up below the input. (of course if it exists..)
You can easily see the current forecast and be able to add that city to click add city button.

# Developers Guide

Basically, I've used lazy loading and feature modules to create a smooth Architecture.
We have 2 pages home and Search. Each component has their own module and route mechanism.
I've seperated app and libs at first. My goal was seperate reusable components/directives/pipes/services etc from main smart components.
Then I draw a few templates for pages so I realized I need to use same component types more than one page.
That's why I created shared-ui folder and split big components into small pieces.. After that import into other lazy loading feature modules. To make it reusable and generic. Components structure based on service's behaviourSubjects, output and input instead of ngRx pattern because it's a small application we don't need to.

I've added endpoint urls into environment files to access and use safely/easily.

I've created base service to initialize all service calls and manage all request from one place. Thus we can intercept it easily and change error messages or data.
Also considering simple crud operations It'd be better to create one resource service and use singleton pattern.

After network calls api returns data differently so I've created 2 pipes to use everywhere and those are timestamp-date-format and Kelvin to Celcius temperature-converter pipes.

## Custom directive unit test

Create a custom directive only job is highlighted the tag when you hover it. You can add color or default yellow.
![Demo](https://res.cloudinary.com/dlth9ls92/image/upload/v1615066708/directive-unit-test.gif)
