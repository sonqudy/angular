import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';

import 'rxjs/add/operator/map'

import {AppComponent} from './app.component';
import {PanelComponent} from './container';
import {Mock} from './mock'
import {Config} from "./config.service";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const appRoutes: Routes = [
    { path: 'home', data: {title: 'Home'}, component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
    declarations: [AppComponent, HomeComponent, LoginComponent, DashboardComponent],
    imports: [BrowserModule, FormsModule, HttpModule,
        RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )],
    bootstrap: [AppComponent],
    providers: [Config, Mock]
})

class AppModule {
}


platformBrowserDynamic().bootstrapModule(AppModule);