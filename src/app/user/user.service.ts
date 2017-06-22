
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import { User } from './user';
import { HeadersUtil } from './../common/TokenUtils';

@Injectable()
export class UserService {
    public url: String = environment.apiURL;
    constructor(private _http: Http) { }

    getUser(user: User): Observable<Response> {
        const headers: Headers = HeadersUtil.getHeaders();
        return this._http.get(`${this.url}/user?userName=${user.userName}&password=${user.password}`, {
            headers: headers
        }).map((res: any) => {
                return res.json();
            })
    }

    login(user: User): Observable<Response> {
        const data = JSON.stringify(user);
         const headers: Headers = HeadersUtil.getHeadersWithOutToken();
        return this._http.post(`${this.url}/user/login`, data, {
            headers: headers
        }).map((res: any) => {
            const tokenObj = JSON.parse(res._body);
            localStorage.setItem('token', tokenObj.token);
            //console.log("response", localStorage.getItem('token'));
            return res.json();
        })
    }

}