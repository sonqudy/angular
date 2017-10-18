import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {User} from './user'

@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    public getUsers() {
        return this.http
            .get('../app/user/users.json')
            .map(res => res.json());
    }

    public addUser(u:User){
        return this.http
            .post('./addUser',JSON.stringify(u))
            .map(res => res.json());
    }
}
