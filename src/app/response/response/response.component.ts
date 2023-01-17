import {Component, HostListener} from '@angular/core';
import {Horoscope} from "../../interface/horoscope.interface";
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent {

  horoscopeData: Horoscope = {
    date_range: '',
    current_date: '',
    description: '',
    compatibility: '',
    mood: '',
    color: '',
    lucky_number: '',
    lucky_time: ''
  }

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(( signData: Data ) => this.horoscopeData = signData['sign'] as Horoscope);
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    localStorage.removeItem('horoscope')
  }

}
