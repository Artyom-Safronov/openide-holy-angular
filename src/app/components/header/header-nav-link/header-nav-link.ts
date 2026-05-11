import { Component, input, computed } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-nav-link',
  imports: [NgClass, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './header-nav-link.html',
})
export class HeaderNavLinkComponent {
  href = input.required<string>();
  label = input.required<string>();
  active = input(false);
  external = input(false);

  classes = computed(() => ({
    'nav-link': true,
    'nav-link-active': this.active(),
  }));
}
