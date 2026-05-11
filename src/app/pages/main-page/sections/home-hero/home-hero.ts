import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../components/button/button';

@Component({
  selector: 'app-home-hero',
  imports: [ButtonComponent],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss',
})
export class HomeHeroComponent {}
