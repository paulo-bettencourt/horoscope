import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from "./presentation/presentation/presentation.component";
import {SignResolver} from "./resolve/sign.resolve";
import { HoroscopeGuard } from './guard/horoscope.guard'
const routes: Routes = [{
  path: '',
  component: PresentationComponent
  },
  {
    path: 'response',
    loadChildren: () => import('../app/response/response.module').then(m => m.ResponseModule),
    resolve: {
      sign: SignResolver
    },
    canActivate: [HoroscopeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SignResolver]
})
export class AppRoutingModule { }
