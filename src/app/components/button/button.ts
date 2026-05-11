import { Component, input, computed } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  href = input<string>();
  size = input<'sm' | 'md'>('md');
  fullWidth = input(false);
  disabled = input(false);
  target = input<string>();
  rel = input<string>();

  classes = computed(() => ({
    btn: true,
    'btn-sm': this.size() === 'sm',
    'btn-md': this.size() === 'md',
    'btn-full': this.fullWidth(),
  }));
}
