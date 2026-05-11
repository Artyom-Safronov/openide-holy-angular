import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stats-section',
  imports: [NgFor],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.scss',
})
export class StatsSectionComponent {
  stats = [
    { value: '200+', label: 'плагинов в маркетплейсе' },
    { value: '15+', label: 'поддерживаемых языков' },
    { value: '10 000+', label: 'активных пользователей' },
    { value: '100%', label: 'открытый исходный код' },
  ];
}
