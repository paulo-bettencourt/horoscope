import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from "./presentation/presentation/presentation.component";
import {SignResolver} from "./resolve/sign.resolve";

const routes: Routes = [{
  path: '',
  component: PresentationComponent
  },
  {
    path: 'response',
    loadChildren: () => import('../app/response/response.module').then(m => m.ResponseModule),
    resolve: {
      sign: SignResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
