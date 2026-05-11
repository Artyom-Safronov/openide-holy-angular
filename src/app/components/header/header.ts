import { Component, signal } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from '../button/button';
import { HeaderNavLinkComponent } from './header-nav-link/header-nav-link';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  active?: boolean;
}

@Component({
  selector: 'app-header',
  imports: [NgClass, NgFor, NgIf, ButtonComponent, HeaderNavLinkComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  mobileOpen = signal(false);

  navItems: NavItem[] = [
    { label: 'Главная', href: '/' },
    { label: 'Маркетплейс', href: '/marketplace/' },
    { label: 'О нас', href: '/about/' },
    { label: 'Связаться', href: '/contact/' },
    { label: 'Бизнесу', href: '/pro/' },
    { label: 'Блог', href: '/blog/' },
  ];

  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }
}
