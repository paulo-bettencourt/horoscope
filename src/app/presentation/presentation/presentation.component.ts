import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Horoscope} from "../../interface/horoscope.interface";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {



  constructor(private route: Router) {
  }

  onSubmit() {
  this.route.navigate(['response'])
  }

}
