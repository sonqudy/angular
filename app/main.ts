import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import 'rxjs/add/operator/map'

import {AppComponent} from './app.component';
import {PanelComponent} from './container';
import {Mock} from './mock'
import {Config} from "./config.service";

@NgModule({
    declarations: [AppComponent, PanelComponent],
    imports: [BrowserModule, FormsModule, HttpModule],
    bootstrap: [AppComponent],
    providers: [Config, Mock]
})

class AppModule {
}


platformBrowserDynamic().bootstrapModule(AppModule);