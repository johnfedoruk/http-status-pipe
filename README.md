# HttpStatusPipe

[![Build Status](https://travis-ci.org/johnfedoruk/http-status-pipe.svg?branch=master)](https://travis-ci.org/johnfedoruk/http-status-pipe)

---

**[Angular 5](https://angular.io)**

_This package will not work with earlier versions of Angular!_


---

This project contains an [Angular 5](https://angular.io) pipe that can be used for rendering an arbitrary status code's status text or status type. The pipe, HttpStatusPipe, is exported from the HttpStatusModule.

## [Demo](https://johnfedoruk.github.io/http-status-pipe/index.html)

## NPM

```bash
npm install --save http-status-pipe
```

## Usage

```TypeScript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpStatusModule } from 'http-status-pipe';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpStatusModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

> ./src/app/app/module.ts

```TypeScript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public statusCode: number = 200;
    constructor() {}
}
```

> src/app/app.component.ts

```html
<h1 id="status-code">
    Error {{ statusCode }}
    <small>
        {{ statusCode | status }}
    </small>
</h1>
<p>{{ statusCode | status:"type" }}</p>
```

> src/app/app.component.html

