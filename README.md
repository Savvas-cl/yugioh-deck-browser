# YugiohDeckBrowser

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Installation

Install dependencies by running npm install. Latest version of npm is recommended.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Development process

First of all initialize a new project and create the folder structure. 
In my case I used the angular 6 javascript framework so it was fairly easy to initialize a new project,
with the help of the angular-cli. A git repository was also initialized automatically.
Then I installed any other modules that I may need in my project. In my case ng-sidebar, bootstrap and
ng-bootstrap. I used npm for this. 

The next step was to consider the UI-design and decide how the deck browser will look like.
Here also was made the decision about the number of components needed and their hierarchy.
With the of angular-cli I generated the components, models and services. 
I just used one Card model to hold the card details and also on service to get the card details from the provided API.
Next step was to decide in detail how components will share data between them.

Finally develop all the aforementioned, then check that everything works alright and there are no errors thrown,
in the developer console. Run ng lint, correct any errors tha may come up. Enjoy the new deck browser.