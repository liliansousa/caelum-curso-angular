import { Component, OnInit } from '@angular/core';
import { PageDataService } from 'src/app/page-data.service';

@Component({
    selector:'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})  

export class HeaderComponent {
    private _isMenuOpen = false;
    tituloHeader = "";

    constructor(
        private pageData: PageDataService
    ){
        this.pageData.title.subscribe((teste) => {
            this.tituloHeader = teste
        });
    }

    get isMenuOpen() {
        return this._isMenuOpen;
    }

    toggleMenu() {  
       this._isMenuOpen = !this._isMenuOpen;
    }
}