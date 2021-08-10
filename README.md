# TeamEvents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development guide

Data-test, which is preferred by cypress, has been added to the html code.\
Example: `data-test="input_name"`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Run application in Docker

**Instal docker** if You have Docker instaled - Skip this step - Instal Docker from [Docker](https://www.docker.com/get-started) site and run it.\
**Make Image from Dockerfile** Run `docker build -t <YOUR IMAGE NAME> .` to create image from Dockerfile.\
**Run container** Open Docker desktop, navigate to images, choose your image and click 'run', in optional settings you can add name of container and exact port.\
**Opening app in container** In Docker desktop navigate to Containers/Apps, choose your container and click 'Open in browser'.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

**Installing dependencies:** in case you haven't installed them before, use the command `npm install`.\
**Running Angular app:** use the command `ng serve`\
**Opening cypress:** -> Opening cypress to run selected test: use the command `npm run e2e:open`.\
**Running cypress tests:** -> Running all cypress tests in terminal: use the command `npm run e2e:run`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
