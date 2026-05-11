import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {}
