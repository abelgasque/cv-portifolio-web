import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ScrollSpyService } from '../components/scroll-spy/scroll-spy.service';
import { Config } from 'src/app/app-config';

@Component({
  selector: 'app-landing-page-home',
  templateUrl: './landing-page-home.component.html',
  styleUrls: ['./landing-page-home.component.scss']
})
export class LandingPageHomeComponent implements OnInit {

  public currentSection;
  public themeConfig: any;

  constructor(public scrollSpy: ScrollSpyService, private activatedRoute: ActivatedRoute) {
    this.themeConfig = Config.config;
  }

  ngOnInit(): void {}

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    this.scrollSpy.nextCount(sectionId);
  }

}
