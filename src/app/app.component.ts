import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seja bem-vindo';

  // somar(numero1: number, numero2: number): number {
  //   return numero1 + numero2;
  // }

  recebeNumero(resposta: Event): void {
    console.log('Componente pai recebeu: ' + resposta);
  }
}
