import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarjoryeDisciplinaService } from '../marjorye-disciplina.service';

@Component({
  selector: 'app-marjorye-detalhes',
  templateUrl: './marjorye-detalhes.component.html',
  styleUrls: ['./marjorye-detalhes.component.css'],
})
export class MarjoryeDetalhesComponent implements OnInit {
  item;
  constructor(
    public MarjService: MarjoryeDisciplinaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.item = this.MarjService.getList()[params.get('index')];
    });
  }
}
