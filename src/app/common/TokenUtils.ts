import { Headers } from '@angular/http';

export class HeadersUtil {
    public static getHeaders(): Headers {
        var headers = new Headers();
        headers.append("x-access-token", localStorage.getItem('token'));
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    public static getHeadersWithOutToken(): Headers {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    public static logout() {
        localStorage.clear();
    }
}