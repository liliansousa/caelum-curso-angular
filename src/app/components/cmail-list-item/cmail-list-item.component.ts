import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['./cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {
  @Input() destinatario = "";
  @Input() assunto = "";
  @Input() introducaoDoConteudo = "";
  @Input() dataDeEnvio = "";
  @Output() clicouNaLixeira = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  apagarEmail() {
    if(confirm('Deseja realmente excluir?')){
      this.clicouNaLixeira.emit()
    } else {  
      console.log('Ele não quis');
    }
  }

}
