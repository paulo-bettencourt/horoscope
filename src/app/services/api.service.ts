import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Horoscope} from "../interface/horoscope.interface";
import {Observable, Subject} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";



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

  private _sign$ = new Subject();
  private _day$ = new Subject();

  constructor(private http: HttpClient) {
    console.log("serviço")
  }

  getHoroscopeData(sign: string, day: string): Observable<Horoscope> {
    console.log("1st request", sign, day)
    return this.http.post<Horoscope>(`https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`,  this.httpOptions)
  }

  get sign$(): Subject<any> {
    return this._sign$;
  }

  set sign$(value: any) {
    this._sign$.next(value);
  }

  get day$(): Subject<any> {
    return this._day$;
  }

  set day$(value: any) {
    this._day$.next(value);
  }

}
