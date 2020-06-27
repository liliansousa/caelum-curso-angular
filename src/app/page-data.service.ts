import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  constructor() { }

  readonly title = new Subject<string>();

  atualizaTitulo(novoTitulo: string) {
    document.title = `${novoTitulo} - CMail`;
    this.title.next(novoTitulo);
  }
}
