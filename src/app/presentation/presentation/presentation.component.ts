import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Horoscope} from "../../interface/horoscope.interface";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {FormBuilder, Validator} from "@angular/forms";
import { Validators } from "@angular/forms";
import {SignResolver} from "../../resolve/sign.resolve";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {

  form = this.fb.group({
    sign: ['', [Validators.required]],
    day: ['', [Validators.required]]
  })
  signData = '';
  dayData = '';

  constructor(private route: Router, private fb: FormBuilder, private service: ApiService) {}

  onChangeSign(event: Event) {
    // @ts-ignore

    // @ts-ignore
    this.signData = event.target.value;
    console.log("INICIO", this.signData)
  }

  onChangeDay(event: Event) {
    console.log("INICIO", this.dayData)
    // @ts-ignore
    this.dayData = event.target.value;
  }

  onSubmit() {
    console.log("INICIO", this.signData)
    this.service.sign$ = this.signData;
    this.service.day$ = this.dayData;
    this.route.navigate(['response'])
  }

}
