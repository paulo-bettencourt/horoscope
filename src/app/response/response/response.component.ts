import {AfterContentChecked, AfterViewInit, Component, HostListener, OnDestroy} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Horoscope} from "../../interface/horoscope.interface";
import {ApiService} from "../../services/api.service";
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
