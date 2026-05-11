import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cta-banner',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './cta-banner.html',
  styleUrl: './cta-banner.scss',
})
export class CtaBannerComponent {
  sent = signal(false);
  email = new FormControl('', [Validators.required, Validators.email]);

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.email.valid) {
      this.sent.set(true);
    }
  }
}
