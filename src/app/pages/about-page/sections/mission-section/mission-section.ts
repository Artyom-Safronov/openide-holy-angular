import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mission-section',
  imports: [NgFor],
  templateUrl: './mission-section.html',
  styleUrl: './mission-section.scss',
})
export class MissionSectionComponent {
  audience = [
    'Разработчики, которым важна свобода и прозрачность инструментов',
    'Команды, работающие в закрытых корпоративных контурах',
    'Компании с требованиями к импортозамещению',
    'Open source-контрибьюторы и энтузиасты',
    'Образовательные организации и исследователи',
  ];
}
