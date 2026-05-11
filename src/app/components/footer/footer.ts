import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [NgFor],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  navLinks = [
    { label: 'Главная', href: '/' },
    { label: 'Маркетплейс', href: '/marketplace/' },
    { label: 'О нас', href: '/about/' },
    { label: 'Связаться', href: '/contact/' },
    { label: 'Бизнесу', href: '/pro/' },
    { label: 'Блог', href: '/blog/' },
    { label: 'Скачать', href: '/download/' },
  ];

  legalLinks = [
    { label: 'Политика конфиденциальности', href: '/privacy-policy/' },
    { label: 'Условия использования', href: '/terms/' },
    { label: 'Оферта для разработчиков плагинов', href: '/plugin-offer/' },
    { label: 'Соглашение о правах участника', href: '/contributor-agreement/' },
  ];
}
