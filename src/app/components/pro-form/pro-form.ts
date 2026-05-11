import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from '../button/button';
import { ProFormService } from '../../services/pro-form.service';

function emailValidator(control: AbstractControl): ValidationErrors | null {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value ?? '');
  return valid ? null : { email: true };
}

@Component({
  selector: 'app-pro-form',
  imports: [ReactiveFormsModule, NgClass, NgFor, NgIf, ButtonComponent],
  templateUrl: './pro-form.html',
  styleUrl: './pro-form.scss',
})
export class ProFormComponent {
  formService = inject(ProFormService);

  fields = [
    { id: 'firstName', label: 'Имя', type: 'text' },
    { id: 'lastName', label: 'Фамилия', type: 'text' },
    { id: 'email', label: 'Корпоративный email', type: 'email' },
    { id: 'company', label: 'Компания', type: 'text' },
    { id: 'licenses', label: 'Количество лицензий', type: 'number' },
  ];

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, emailValidator]),
    company: new FormControl('', Validators.required),
    licenses: new FormControl('', [Validators.required, Validators.min(1)]),
    acceptPolicy: new FormControl(false, Validators.requiredTrue),
  });

  error(field: string): string | null {
    const ctrl = this.form.get(field);
    if (!ctrl?.invalid || !ctrl.touched) return null;
    if (ctrl.errors?.['required'] || ctrl.errors?.['requiredTrue']) {
      const messages: Record<string, string> = {
        firstName: 'Введите имя',
        lastName: 'Введите фамилию',
        email: 'Введите email',
        company: 'Введите компанию',
        licenses: 'Укажите количество',
        acceptPolicy: 'Необходимо согласие',
      };
      return messages[field] ?? 'Обязательное поле';
    }
    if (ctrl.errors?.['email']) return 'Некорректный email';
    if (ctrl.errors?.['min']) return 'Укажите корректное число';
    return null;
  }

  async onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    const v = this.form.value;
    await this.formService.submit({
      firstName: v.firstName!,
      lastName: v.lastName!,
      email: v.email!,
      company: v.company!,
      licenses: v.licenses!,
    });
  }
}
