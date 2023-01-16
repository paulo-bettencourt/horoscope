import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Horoscope} from "../interface/horoscope.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHoroscopeData(): Observable<Horoscope> {
    return this.http.post<Horoscope>('https://aztro.sameerkumar.website/?sign=virgo&day=today', {})
  }

}
