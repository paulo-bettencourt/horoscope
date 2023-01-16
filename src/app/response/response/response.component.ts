import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Horoscope} from "../../interface/horoscope.interface";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent {

  horoscopeData$: Horoscope = {
    date_range: '',
    current_date: '',
    description: '',
    compatibility: '',
    mood: '',
    color: '',
    lucky_number: '',
    lucky_time: ''
  }

  constructor(private service: ApiService) {
    this.service.getHoroscopeData().subscribe((data: Horoscope) => this.horoscopeData$ = data);
  }

}
