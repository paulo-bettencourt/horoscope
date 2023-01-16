import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseComponent } from './response/response.component';
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: ResponseComponent
}]

@NgModule({
  declarations: [
    ResponseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ResponseModule { }
