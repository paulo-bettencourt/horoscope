import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Horoscope} from "../interface/horoscope.interface";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      accept: '*/*',
      contentType: 'application/x-www-form-urlencoded',
    }),
    responseType: 'text',
  };

  constructor(private http: HttpClient) {}

  getHoroscopeData(sign: string, day: string): Observable<Horoscope> {
    return this.http.post<Horoscope>(`https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`,  this.httpOptions)
  }

}
