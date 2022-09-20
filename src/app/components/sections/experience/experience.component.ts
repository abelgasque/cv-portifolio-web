import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  listExperience: any[];

  constructor() {
    this.listExperience = [
      {
        company: 'Gasque IT Services',
        occupattion: 'Fundador',
        type: 'CLT',
        dtStart: 'julho de 2022',
        dtEnd: '',
        isPresent: true,
        description: '',
      },
      {
        company: 'PTC Group',
        occupattion: 'Engenheiro de software',
        type: 'PJ',
        dtStart: 'junho de 2022',
        dtEnd: '',
        isPresent: true,
        description: 'Atendimento clientes do grupo, prestando serviços de desenvolvimento backend em todos os ciclos de vida do projeto. Atualmente alocado em uma instituição financeira, focando em melhorias com relação a segurança da informção, implementando regras para mitigação de vulnerabilidades, indisponibilidade, ataques, etc.',
      },
      {
        company: 'Code7',
        occupattion: 'Analista de sistemas',
        type: 'CLT',
        dtStart: 'setembro de 2020',
        dtEnd: 'junho de 2022',
        isPresent: false,
        description: 'Análise e desenvolvimento de aplicações para desktops de call centers, integrações com serviços windows e serviço de internet utilizando ASP .Net com banco de dados SQL Server. Análise de bug e erros em fila N3. Implantação de serviços windows e publicação de serviço de internet em Gerenciador IIS em servidores Windows.',
      },
      {
        company: 'Grupo Floripark',
        occupattion: 'Aprendiz',
        type: 'CLT',
        dtStart: 'abril de 2019',
        dtEnd: 'agosto de 2020',
        isPresent: false,
        description: 'Desenvolvimento de sistema web para intranet com Angular 2+, utilizando bibliotecas de componentes. Consumindo pontos finais de API REST com Spring Framework.',
      },
    ];
  }

  ngOnInit(): void { }
}
