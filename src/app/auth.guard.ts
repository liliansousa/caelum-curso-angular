import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(
        private roteador: Router
    ){}
    
    canActivate() {
        if(localStorage.getItem('TOKEN')){
            return true;
        } else {
            this.roteador.navigate([''])
            return false
        }
    }
}