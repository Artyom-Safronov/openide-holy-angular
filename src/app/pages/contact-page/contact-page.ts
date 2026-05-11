import { Component } from '@angular/core';
import { ContactHeroComponent } from './sections/contact-hero/contact-hero';
import { ContactFormSectionComponent } from './sections/contact-form-section/contact-form-section';

@Component({
  selector: 'app-contact-page',
  imports: [ContactHeroComponent, ContactFormSectionComponent],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPageComponent {}
