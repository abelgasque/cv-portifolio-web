import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

  public listCertification: any[];

  constructor() {
    this.listCertification = [
      {
        company: 'Cisco Networking Academy',
        occupation: 'Cybersecurity Essentials',
        dtStart: 'Maio de 2020',
        dtEnd: 'Sem data de expiração',
        description: null,
      },
      {
        company: 'AlgaWorks',
        occupation: 'Fullstack Angular e Spring',
        dtStart: 'Abril de 2019',
        dtEnd: 'Sem data de expiração',
        description: null,
      },
    ];
  }

  ngOnInit(): void {
  }

}
