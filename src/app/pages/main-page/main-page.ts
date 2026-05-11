import { Component } from '@angular/core';
import { HomeHeroComponent } from './sections/home-hero/home-hero';
import { FeaturesSectionComponent } from './sections/features-section/features-section';
import { AiSectionComponent } from './sections/ai-section/ai-section';
import { ExperimentalSectionComponent } from './sections/experimental-section/experimental-section';
import { MarketplacePreviewComponent } from './sections/marketplace-preview/marketplace-preview';
import { CtaBannerComponent } from './sections/cta-banner/cta-banner';
import { NewsSectionComponent } from './sections/news-section/news-section';
import { FaqSectionComponent } from './sections/faq-section/faq-section';

@Component({
  selector: 'app-main-page',
  imports: [
    HomeHeroComponent,
    FeaturesSectionComponent,
    AiSectionComponent,
    ExperimentalSectionComponent,
    MarketplacePreviewComponent,
    CtaBannerComponent,
    NewsSectionComponent,
    FaqSectionComponent,
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPageComponent {}
