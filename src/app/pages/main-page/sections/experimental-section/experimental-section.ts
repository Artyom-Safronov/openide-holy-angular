import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

interface ExpCard {
  icon: string;
  badge: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-experimental-section',
  imports: [NgClass, NgFor],
  templateUrl: './experimental-section.html',
  styleUrl: './experimental-section.scss',
})
export class ExperimentalSectionComponent {
  experimental: ExpCard[] = [
    {
      icon: '/icons/features/icon-5.svg',
      badge: 'Бета',
      title: 'TypeScript Go (native)',
      description:
        'Нативный TypeScript Language Server на Go с ускоренной индексацией и поддержкой больших монорепозиториев',
    },
    {
      icon: '/icons/features/icon-7.svg',
      badge: 'Эксперимент',
      title: 'Go Language Support',
      description:
        'Расширенная поддержка Go с автодополнением, навигацией по коду и интеграцией с go tools',
    },
    {
      icon: '/icons/features/icon-9.svg',
      badge: 'Бета',
      title: 'C# и .NET',
      description:
        'Поддержка C# и .NET через Language Server Protocol с базовыми возможностями автодополнения и диагностики',
    },
  ];

  inDevelopment: ExpCard[] = [
    {
      icon: '/icons/features/icon-10.svg',
      badge: 'В разработке',
      title: 'Интеграция с базами данных',
      description:
        'Встроенный просмотр схем, выполнение SQL-запросов и работа с популярными СУБД прямо из IDE',
    },
    {
      icon: '/icons/features/icon-4.svg',
      badge: 'В разработке',
      title: 'Remote Development',
      description: 'Разработка на удалённых серверах и в облачных средах без потери привычного DevEx',
    },
  ];
}
