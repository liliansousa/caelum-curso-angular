
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { CmailListItemComponent } from 'src/app/components/cmail-list-item/cmail-list-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CmailListItemComponent
  ],
  imports: [ CommonModule ],
  exports: [
    HeaderComponent,
    CmailListItemComponent
  ]
})
export class SharedComponentModule { }
