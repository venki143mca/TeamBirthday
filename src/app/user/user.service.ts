
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import { User } from './user';

@Injectable()
export class UserService {
    public url: String = environment.apiURL;
    constructor(private _http: Http) { }

    getUser(user: User): Observable<Response> {
        return this._http.get(`${this.url}/user?userName=${user.userName}&password=${user.password}`)
            .map((res: any) => {
                return res.json();
            })
    }
}