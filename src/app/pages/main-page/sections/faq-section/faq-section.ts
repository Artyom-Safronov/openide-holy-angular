import { Component, signal } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

interface FAQItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-section',
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.scss',
})
export class FaqSectionComponent {
  activeTab = signal<string>('OpenIDE');
  openIndex = signal<number | null>(0);

  categories: Record<string, FAQItem[]> = {
    OpenIDE: [
      {
        question: 'Что такое OpenIDE?',
        answer:
          'OpenIDE — открытая среда разработки на базе IntelliJ Platform. Она предоставляет полноценные возможности профессиональной IDE с маркетплейсом плагинов, поддержкой множества языков программирования и интеграцией с AI-ассистентами. Базовая версия полностью бесплатна и распространяется с открытым исходным кодом.',
      },
      {
        question: 'Сколько стоит OpenIDE?',
        answer:
          'Базовая версия OpenIDE полностью бесплатна. OpenIDE Pro — платное решение для корпоративных пользователей, которое включает корпоративную поддержку по SLA, расширенные инструменты и юридически оформленную поставку. Подробнее — на странице «Бизнесу».',
      },
      {
        question: 'Какие языки программирования поддерживает OpenIDE?',
        answer:
          'OpenIDE поддерживает Kotlin, Java, TypeScript, JavaScript, Python, Go, C#, Rust и многие другие языки. Поддержка конкретных языков и фреймворков расширяется через плагины из маркетплейса.',
      },
      {
        question: 'Как скачать OpenIDE?',
        answer:
          'Перейдите на страницу загрузки и скачайте дистрибутив для своей операционной системы (macOS, Linux, Windows). Установка стандартная для вашей платформы.',
      },
      {
        question: 'Как работает поддержка AI-ассистентов?',
        answer:
          'OpenIDE интегрируется с AI-ассистентами через маркетплейс плагинов. Поддерживаются GigaCode, Yandex Code Assistant, Continue, KiloCode, Veai и другие. Все интеграции работают локально — исходный код не передаётся во внешние облачные сервисы.',
      },
    ],
    Маркетплейс: [
      {
        question: 'Как установить плагин из маркетплейса?',
        answer:
          'Откройте Settings → Plugins в IDE, перейдите на вкладку Marketplace, найдите нужный плагин через строку поиска и нажмите Install. После установки IDE предложит перезапуститься.',
      },
      {
        question: 'Как опубликовать свой плагин?',
        answer:
          'Зарегистрируйтесь в маркетплейсе, подготовьте плагин в соответствии с документацией для разработчиков, заполните карточку плагина и отправьте на модерацию. Обычно проверка занимает 1–3 рабочих дня.',
      },
      {
        question: 'Все ли плагины из маркетплейса бесплатны?',
        answer:
          'Большинство плагинов бесплатны. Некоторые авторы предлагают платные версии с расширенной функциональностью или поддержкой. Стоимость всегда указана на карточке плагина.',
      },
      {
        question: 'Совместимы ли плагины из JetBrains Marketplace с OpenIDE?',
        answer:
          'OpenIDE построена на IntelliJ Platform, поэтому многие плагины из JetBrains Marketplace технически совместимы. Однако мы рекомендуем использовать плагины из официального маркетплейса OpenIDE, прошедшие проверку на совместимость и безопасность.',
      },
    ],
  };

  get tabs(): string[] {
    return Object.keys(this.categories);
  }

  get items(): FAQItem[] {
    return this.categories[this.activeTab()] ?? [];
  }

  setCategory(tab: string): void {
    this.activeTab.set(tab);
    this.openIndex.set(0);
  }

  toggle(idx: number): void {
    this.openIndex.set(this.openIndex() === idx ? null : idx);
  }
}
