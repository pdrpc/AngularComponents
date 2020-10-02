import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valor;

  gerarValor(){
    this.valor = Math.floor(Math.random() * 10000) + 1 + ' Créditos';
  }
}
