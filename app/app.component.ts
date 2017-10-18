import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Config} from './config.service';
import {PanelComponent} from "./container";
import {Mock} from './mock'
import {Person} from './model'

@Component({
    selector: 'my-app',
    entryComponents: [PanelComponent],
    templateUrl: 'app/app.component.html',
})
export class AppComponent {
    title: string;
    user: Person;
    users:Array<any>;

    submitted: boolean = false;

    constructor(_config: Config, _mock: Mock, private _http: Http) {
        this.title = _config.TITLE_PAGE;
        this.user = _mock.mike;
        _http.get("../app/users.json")
            .map(res => res.json())
            .subscribe(users => this.users = users);
    }

    onSubmit(f) {
        this.submitted = true;
        console.log("sending..." + JSON.stringify(this.user));
    }


}