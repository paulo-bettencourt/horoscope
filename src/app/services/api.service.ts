import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Horoscope} from "../interface/horoscope.interface";
import {Observable} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) {}

  getHoroscopeData(): Observable<Horoscope> {
    return this.http.post<Horoscope>('https://aztro.sameerkumar.website/?sign=virgo&day=today',  this.httpOptions)
  }

}
