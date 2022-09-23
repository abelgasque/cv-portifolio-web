import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  listFormation: any[];

  constructor() {
    this.listFormation = [
      {
        company: 'Estácio de Sá',
        occupation: 'Sistemas da Informação',
        dtStart: 'Janeiro de 2020',
        dtEnd: 'Julho de 2024',
        description: '',
      },
      {
        company: 'SENAI/SC - Serviço Nacional de Aprendizagem Industrial',
        occupation: 'Técnico em Informática Integrado ao Ensino Médio',
        dtStart: 'Janeiro de 2017',
        dtEnd: 'Dezembro de 2019',
        description: 'Técnico focado no desenvolvimento de software com conceitos de algoritmos, lógica de programação, boas praticas para desenvolvimento de produtos de software, gestão de operações, desenvolvimento de sistemas web com JSF / JSP, desenvolvimento de aplicativos mobiles com Android Studio, desenvolvimento de banco de dados relacionais, modelagem de banco de dados relacionais e metodologias ágeis com Scrum.',
      },
    ];
  }

  ngOnInit(): void {
  }

}
