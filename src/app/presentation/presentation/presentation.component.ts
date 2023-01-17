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

  constructor(private route: Router, private fb: FormBuilder, private service: ApiService, private resolver: SignResolver) {}

  onChangeSign(event: Event) {
    // @ts-ignore
    this.resolver.sign = event.target.value as string;
  }

  onChangeDay(event: Event) {
    // @ts-ignore
    this.resolver.day = event.target.value as string;
  }

  onSubmit() {
    this.route.navigate(['response'])
  }

}
