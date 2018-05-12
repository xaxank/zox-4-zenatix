import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class InstagramService {

    private dataUrl = "https://api.instagram.com/v1/users/self/media/recent/?"
    private ACCESS_TOKEN = ''

    constructor(
        private http: HttpClient
    ){}

    setHeaders(accessToken) {
        this.ACCESS_TOKEN = accessToken;
        this.dataUrl = this.dataUrl+this.ACCESS_TOKEN;
    }

    fetchData() {
        return this.http.get<any>(this.dataUrl).pipe(
            tap((data)=> data)
        )
    }

}