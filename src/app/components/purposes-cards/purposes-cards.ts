import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-purposes-cards',
  imports: [NgFor],
  templateUrl: './purposes-cards.html',
  styleUrl: './purposes-cards.scss',
})
export class PurposesCardsComponent {
  cards = [
    'Полностью локальная IDE без зависимости от внешних и зарубежных сервисов (работа в закрытом контуре)',
    'Юридически оформленная поставка и поддержка по SLA',
    'Расширенные инструменты для Java/Spring, Go, JS/TS и Python',
  ];
}
