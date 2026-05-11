import { Component, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

function emailValidator(control: AbstractControl): ValidationErrors | null {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value ?? '');
  return valid ? null : { email: true };
}

@Component({
  selector: 'app-contact-form-section',
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './contact-form-section.html',
  styleUrl: './contact-form-section.scss',
})
export class ContactFormSectionComponent {
  submitting = signal(false);
  fileName = signal('');

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, emailValidator]),
    message: new FormControl('', Validators.required),
    consent: new FormControl(false, Validators.requiredTrue),
  });

  error(field: string): string | null {
    const ctrl = this.form.get(field);
    if (!ctrl?.invalid || !ctrl.touched) return null;
    if (ctrl.errors?.['email']) return 'Некорректный email';
    const messages: Record<string, string> = {
      name: 'Введите имя',
      email: 'Введите email',
      message: 'Введите сообщение',
      consent: 'Необходимо согласие',
    };
    return messages[field] ?? 'Обязательное поле';
  }

  async onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.submitting.set(true);
    await new Promise((r) => setTimeout(r, 800));
    this.submitting.set(false);
    this.form.reset({ name: '', email: '', message: '', consent: false });
    this.fileName.set('');
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.fileName.set(input.files?.[0]?.name ?? '');
  }

  triggerFile(fileInput: HTMLInputElement) {
    fileInput.click();
  }
}
