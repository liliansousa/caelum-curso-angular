import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmailFormFieldDirective } from './../../components/cmail-form-group/cmail-form-field.directive';
import { CmailFormGroupComponent } from './../../components/cmail-form-group/cmail-form-group.component';

@NgModule({
  declarations: [
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ]
})
export class CmailFormModule { }
