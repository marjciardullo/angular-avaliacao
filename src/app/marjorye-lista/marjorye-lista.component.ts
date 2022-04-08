import { Component, OnInit } from '@angular/core';
import { MarjoryeDisciplinaService } from '../marjorye-disciplina.service';

@Component({
  selector: 'app-marjorye-lista',
  templateUrl: './marjorye-lista.component.html',
  styleUrls: ['./marjorye-lista.component.css'],
})
export class MarjoryeListaComponent implements OnInit {
  codigo: string;
  nome: string;
  horario: number;
  diaSemana: string;
  ementa: string;

  constructor(public disciplinas: MarjoryeDisciplinaService) {
    this.codigo = '';
    this.nome = '';
    this.horario = 0;
    this.diaSemana = '';
    this.ementa = '';
  }
  ngOnInit() {}
}
