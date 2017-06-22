import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import { HeadersUtil } from './../common/TokenUtils';

@Injectable()
export class MailDetailsService {
    public url: String = environment.apiURL;
    constructor(private _http: Http) { }

    getMailDetails(): Observable<Response> {
        const headers: Headers = HeadersUtil.getHeaders();
        return this._http.get(`${this.url}/mailDetails`, {
            headers: headers
        }).map((res: any) => {
                return res.json();
            })
    }

    saveMailDetails(mailDetails: any): Observable<Response> {
        const data = JSON.stringify(mailDetails);
        const headers: Headers = HeadersUtil.getHeaders();
        return this._http.post(`${this.url}/mailDetails`, data, {
            headers: headers
        });
    }
}