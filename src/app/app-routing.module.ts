import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from "./presentation/presentation/presentation.component";

const routes: Routes = [{
  path: '',
  component: PresentationComponent
},
  {
    path: 'response',
    loadChildren: () => import('../app/response/response.module').then(m => m.ResponseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
