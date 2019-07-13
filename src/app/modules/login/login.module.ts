// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Custom
import { CmailFormModule } from './../cmail-form/cmail-form.module';
import { LoginRoutingModule } from './login-routing.module';
import { SharedComponentModule } from './../shared-component/shared-component.module';
import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/services/login.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
    CmailFormModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
