import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Horoscope} from "../interface/horoscope.interface";
import {ApiService} from "../services/api.service";

@Injectable({ providedIn: 'root' })
export class SignResolver implements Resolve<Horoscope> {

  sign!: string;
  day!: string;

  constructor(private service: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Horoscope> | Promise<Horoscope> | Horoscope {
    return this.service.getHoroscopeData(this.sign, this.day);
  }

}
