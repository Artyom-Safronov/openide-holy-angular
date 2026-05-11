import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ProFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  licenses: string;
}

@Injectable({ providedIn: 'root' })
export class ProFormApiService {
  private http = inject(HttpClient);

  submit(data: ProFormData) {
    return this.http.post<{ success: boolean; message: string }>('/api/pro-form', data);
  }
}
