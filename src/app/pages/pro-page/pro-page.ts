import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { PurposesCardsComponent } from '../../components/purposes-cards/purposes-cards';
import { AdvantagesCardsComponent } from '../../components/advantages-cards/advantages-cards';
import { CommercialProductComponent } from '../../components/commercial-product/commercial-product';
import { ProFormComponent } from '../../components/pro-form/pro-form';

@Component({
  selector: 'app-pro-page',
  imports: [HeroComponent, PurposesCardsComponent, AdvantagesCardsComponent, CommercialProductComponent, ProFormComponent],
  templateUrl: './pro-page.html',
  styleUrl: './pro-page.scss',
})
export class ProPageComponent {}
