import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Horoscope} from "../interface/horoscope.interface";
import {ApiService} from "../services/api.service";

@Injectable({ providedIn: 'root' })
export class SignResolver implements Resolve<Horoscope> {

  sign = '';
  day = '';

  constructor(private service: ApiService) {

    console.log("resolve")
  this.getSignAndDay();
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Horoscope>|Promise<Horoscope>|Horoscope {
    console.log("assadfasdfasdfasdf sign", this.sign)

    this.service.sign$.subscribe(
      async (x) => {
        console.log('Observer got a next value: ' + x)
        this.sign = await x;
      },
    )

    this.service.day$.subscribe(
      async (x) => {
        console.log('Observer got a next value: ' + x)
        this.day = await x;
      },
    )

    console.log("DIA", this.sign, this.day)
    return this.service.getHoroscopeData(this.sign, this.day);

  }


  private getSignAndDay() {

  }
}
