import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginRoutingModule,
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
