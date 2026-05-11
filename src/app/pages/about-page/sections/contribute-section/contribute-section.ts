import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ButtonComponent } from '../../../../components/button/button';

@Component({
  selector: 'app-contribute-section',
  imports: [NgFor, ButtonComponent],
  templateUrl: './contribute-section.html',
  styleUrl: './contribute-section.scss',
})
export class ContributeSectionComponent {
  ways = [
    {
      icon: '/icons/features/icon-2.svg',
      title: 'Разрабатывайте плагины',
      text: 'Создайте плагин для языка, фреймворка или инструмента — и опубликуйте его в маркетплейсе OpenIDE.',
      href: '/marketplace/',
      linkText: 'Начать разработку',
    },
    {
      icon: '/icons/features/icon-1.svg',
      title: 'Вносите изменения в ядро',
      text: 'Исправляйте ошибки, реализуйте новые функции, улучшайте производительность — PR приветствуются.',
      href: 'https://gitflic.ru/project/openide/openide',
      linkText: 'Открыть на GitFlic',
    },
    {
      icon: '/icons/features/icon-4.svg',
      title: 'Помогайте сообществу',
      text: 'Отвечайте на вопросы, пишите документацию, создавайте обучающие материалы и делитесь опытом.',
      href: '/contact/',
      linkText: 'Связаться с нами',
    },
  ];
}
