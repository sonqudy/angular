import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Config} from './config.service';
import {PanelComponent} from "./container";
import {Mock} from './mock'
import {Person} from './model'
import {User} from './model'
import {UserService} from './service'

@Component({
    selector: 'my-app',
    providers: [UserService],
    templateUrl: 'app/app.component.html',
})


export class AppComponent {
    title: string;
    user: Person;
    users:Array<any>;

    submitted: boolean = false;

    constructor(_config: Config, _mock: Mock, userService:UserService) {
        this.title = _config.TITLE_PAGE;
        this.user = _mock.mike;
        userService.getUsers()
            .subscribe(users => this.users = users);
    }

    onSubmit(f) {
        this.submitted = true;
        console.log("sending..." + JSON.stringify(this.user));
    }


}