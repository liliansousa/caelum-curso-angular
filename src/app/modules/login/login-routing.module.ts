import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';


const routers: Routes = [
    {
      path: '',
      component: LoginComponent
    }
  ]
  

@NgModule({
    imports: [
        RouterModule.forChild(routers)
    ],
    exports: [
        RouterModule
    ]
})

export class LoginRoutingModule {}