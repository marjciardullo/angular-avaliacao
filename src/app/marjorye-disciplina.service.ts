import { Injectable } from '@angular/core';
interface Task {
  codigo: string;
  nome: string;
  horario: number;
  diaSemana: string;
  ementa: string;
}
@Injectable()
export class MarjoryeDisciplinaService {
  list: Array<Task> = [];
  constructor() {}

  getList() {
    return this.list;
  }

  add(
    codigo: string,
    nome: string,
    horario: number,
    diaSemana: string,
    ementa: string
  ) {
    this.list.push({ codigo, nome, horario, diaSemana, ementa });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
