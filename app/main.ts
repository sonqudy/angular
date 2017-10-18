import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import {AppComponent} from './app.component';
import {VideoListComponent} from './videolist.component';
import {VideoDetailComponent} from './videodetail.component';

@NgModule({
    declarations: [AppComponent, VideoListComponent, VideoDetailComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent],
})

class AppModule {
}


platformBrowserDynamic().bootstrapModule(AppModule);