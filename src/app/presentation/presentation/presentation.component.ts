import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Horoscope} from "../../interface/horoscope.interface";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {FormBuilder, Validator} from "@angular/forms";
import { Validators } from "@angular/forms";

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

  constructor(private route: Router, private fb: FormBuilder) {
  }

  onChangeSign(event: Event) {
    // @ts-ignore
    this.form.controls['sign'].setValue(event.target.value);
  }

  onChangeDay(event: Event) {
    // @ts-ignore
    this.form.controls['day'].setValue(event.target.value);
  }

  onSubmit() {
    this.route.navigate(['response'])
  }

}
