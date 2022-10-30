import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSimpleComponent } from './login/simple/simple.component';;
import { RegisterSimpleComponent } from './register/simple/simple.component';

const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: 'simple',
        component: LoginSimpleComponent
      }
    ]
  },
  {
    path: 'register',
    children: [
      {
        path: 'simple',
        component: RegisterSimpleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
