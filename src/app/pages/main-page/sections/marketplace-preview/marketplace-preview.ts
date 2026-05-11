import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ButtonComponent } from '../../../../components/button/button';

@Component({
  selector: 'app-marketplace-preview',
  imports: [NgFor, ButtonComponent],
  templateUrl: './marketplace-preview.html',
  styleUrl: './marketplace-preview.scss',
})
export class MarketplacePreviewComponent {
  languageIcons = [
    { src: '/icons/languages/jdk.svg', label: 'Java / Kotlin' },
    { src: '/icons/languages/go.svg', label: 'Go' },
    { src: '/icons/languages/docker.svg', label: 'Docker' },
    { src: '/icons/languages/git.svg', label: 'Git' },
    { src: '/icons/languages/csharp.svg', label: 'C#' },
    { src: '/icons/languages/database.svg', label: 'Database' },
    { src: '/icons/languages/gitflic.svg', label: 'GitFlic' },
    { src: '/icons/languages/setting.svg', label: 'Plugins' },
  ];
}
