import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-values-section',
  imports: [NgFor],
  templateUrl: './values-section.html',
  styleUrl: './values-section.scss',
})
export class ValuesSectionComponent {
  values = [
    {
      icon: '/icons/features/icon-openide.svg',
      title: 'Открытость',
      description:
        'Весь исходный код открыт. Любой разработчик может изучить, как устроена IDE, предложить улучшение или сообщить об ошибке. Никакого скрытого поведения.',
    },
    {
      icon: '/icons/features/icon-8.svg',
      title: 'Независимость',
      description:
        'OpenIDE работает полностью локально. Никакой телеметрии, никаких обращений к иностранным серверам. Ваш код остаётся только у вас.',
    },
    {
      icon: '/icons/features/icon-6.svg',
      title: 'Профессионализм',
      description:
        'Мы не жертвуем качеством ради скорости. Каждая функция проходит проверку, каждый плагин в маркетплейсе — модерацию.',
    },
    {
      icon: '/icons/features/icon-3.svg',
      title: 'Сообщество',
      description:
        'OpenIDE создаётся вместе с сообществом разработчиков. Мы учитываем обратную связь и совместно определяем приоритеты развития.',
    },
  ];
}
