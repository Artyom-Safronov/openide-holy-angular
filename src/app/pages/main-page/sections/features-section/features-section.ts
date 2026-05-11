import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-features-section',
  imports: [NgFor],
  templateUrl: './features-section.html',
  styleUrl: './features-section.scss',
})
export class FeaturesSectionComponent {
  features = [
    {
      icon: '/icons/features/icon-1.svg',
      title: 'Kotlin и JVM',
      description: 'Полная поддержка Kotlin, Java и JVM-экосистемы с умными подсказками, рефакторингом и дебаггером',
      href: '/marketplace/?tag=kotlin',
    },
    {
      icon: '/icons/features/icon-2.svg',
      title: 'Angular и фреймворки',
      description: 'Встроенная поддержка Angular, React, Vue и Next.js — автодополнение, переходы по коду, рефакторинг',
      href: '/marketplace/?tag=frontend',
    },
    {
      icon: '/icons/features/icon-3.svg',
      title: 'Python и ML',
      description: 'Разработка на Python с поддержкой виртуальных окружений, Jupyter, Django и инструментов машинного обучения',
      href: '/marketplace/?tag=python',
    },
    {
      icon: '/icons/features/icon-4.svg',
      title: 'TypeScript и JavaScript',
      description: 'Нативная поддержка TypeScript и JavaScript с мощным LSP-сервером и интеграцией с ESLint',
      href: '/marketplace/?tag=typescript',
    },
    {
      icon: '/icons/features/icon-6.svg',
      title: 'DevOps и контейнеры',
      description: 'Интеграция с Docker, Kubernetes, GitLab CI и другими DevOps-инструментами прямо из IDE',
      href: '/marketplace/?tag=devops',
    },
    {
      icon: '/icons/features/icon-8.svg',
      title: 'Плагины и расширения',
      description: 'Маркетплейс с 200+ плагинами: темы, инструменты, языковые серверы и интеграции с корпоративными системами',
      href: '/marketplace/',
    },
  ];
}
