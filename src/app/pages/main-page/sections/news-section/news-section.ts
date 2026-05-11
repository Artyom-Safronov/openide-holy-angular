import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface NewsCard {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
}

@Component({
  selector: 'app-news-section',
  imports: [NgFor],
  templateUrl: './news-section.html',
  styleUrl: './news-section.scss',
})
export class NewsSectionComponent {
  news: NewsCard[] = [
    {
      tag: 'Обновление',
      date: '25 апреля 2026',
      title: 'OpenIDE 1.4: поддержка TypeScript Go и улучшения LSP',
      excerpt:
        'В новой версии добавлен экспериментальный нативный TypeScript Language Server на Go, ускоряющий индексацию в больших проектах в 3–5 раз.',
      href: '/blog/openide-1-4/',
    },
    {
      tag: 'Маркетплейс',
      date: '14 апреля 2026',
      title: 'Маркетплейс OpenIDE перешагнул отметку 200 плагинов',
      excerpt:
        'Количество опубликованных плагинов превысило 200. Разбираем самые популярные новинки: AI-ассистенты, темы и DevOps-интеграции.',
      href: '/blog/marketplace-200/',
    },
    {
      tag: 'AI',
      date: '2 апреля 2026',
      title: 'Как использовать GigaCode и Yandex Code Assistant в OpenIDE',
      excerpt:
        'Пошаговая инструкция по подключению отечественных AI-ассистентов в OpenIDE с советами по настройке для корпоративных проектов.',
      href: '/blog/ai-assistants-guide/',
    },
  ];
}
