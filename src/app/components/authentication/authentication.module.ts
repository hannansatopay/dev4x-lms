import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginSimpleComponent } from './login/simple/simple.component';;
import { RegisterSimpleComponent } from './register/simple/simple.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule
  ],
  declarations: [
    LoginSimpleComponent,
    RegisterSimpleComponent
  ]
})
export class AuthenticationModule { }
