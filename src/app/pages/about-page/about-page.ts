import { Component } from '@angular/core';
import { AboutHeroComponent } from './sections/about-hero/about-hero';
import { MissionSectionComponent } from './sections/mission-section/mission-section';
import { ValuesSectionComponent } from './sections/values-section/values-section';
import { StatsSectionComponent } from './sections/stats-section/stats-section';
import { OpenSourceSectionComponent } from './sections/open-source-section/open-source-section';
import { ContributeSectionComponent } from './sections/contribute-section/contribute-section';

@Component({
  selector: 'app-about-page',
  imports: [
    AboutHeroComponent,
    MissionSectionComponent,
    ValuesSectionComponent,
    StatsSectionComponent,
    OpenSourceSectionComponent,
    ContributeSectionComponent,
  ],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPageComponent {}
