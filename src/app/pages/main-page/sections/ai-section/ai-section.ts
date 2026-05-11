import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ai-section',
  imports: [NgFor],
  templateUrl: './ai-section.html',
  styleUrl: './ai-section.scss',
})
export class AiSectionComponent {
  features = [
    'Поддержка GigaCode и Yandex Code Assistant',
    'Интеграция с Continue, KiloCode и Veai',
    'Работа без передачи кода во внешние сервисы',
    'Локальные модели через совместимые плагины',
  ];
}
