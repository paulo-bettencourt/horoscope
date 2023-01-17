import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation/presentation.component';
import {ResponseComponent} from "../response/response/response.component";
import {RouterModule, Routes} from "@angular/router";
import {HoroscopeGuard} from "../guard/horoscope.guard";




@NgModule({
  declarations: [
    PresentationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PresentationModule { }
