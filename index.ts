import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
    selector: 'hello-world',
    template: '<h1>{{greeting}}</h1>'
})
class HelloWorld  {
    greeting: string;

    constructor() {
        this.greeting = 'Hello	Angular	2!';
    }
}
@NgModule({
    declarations: [HelloWorld],
    imports: [BrowserModule],
    bootstrap: [HelloWorld],
})

class HelloWorldAppModule {
}


platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);