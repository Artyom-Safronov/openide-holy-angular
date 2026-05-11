import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-open-source-section',
  imports: [NgFor],
  templateUrl: './open-source-section.html',
  styleUrl: './open-source-section.scss',
})
export class OpenSourceSectionComponent {
  facts = [
    {
      title: 'Лицензия Apache 2.0',
      text: 'Исходный код OpenIDE распространяется по лицензии Apache 2.0. Вы можете свободно использовать, изучать, модифицировать и распространять проект.',
    },
    {
      title: 'Открытая разработка',
      text: 'Все задачи, обсуждения и PR находятся в открытом доступе. Решения принимаются прозрачно, с учётом мнения сообщества.',
    },
    {
      title: 'Нет телеметрии',
      text: 'OpenIDE не собирает данные об использовании, не отправляет статистику и не регистрирует ваши действия в IDE.',
    },
  ];
}
