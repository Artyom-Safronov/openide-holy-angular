import { Injectable, signal, inject } from '@angular/core';
import { ProFormApiService } from './pro-form-api.service';

@Injectable({ providedIn: 'root' })
export class ProFormService {
  private api = inject(ProFormApiService);

  readonly submitting = signal(false);
  readonly submitted = signal(false);

  async submit(data: { firstName: string; lastName: string; email: string; company: string; licenses: string }) {
    this.submitting.set(true);
    try {
      await this.api.submit(data).toPromise();
    } catch {
    } finally {
      this.submitting.set(false);
      this.submitted.set(true);
    }
  }
}
