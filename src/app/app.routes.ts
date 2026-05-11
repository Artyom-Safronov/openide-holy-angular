import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/main-page/main-page').then(m => m.MainPageComponent),
        pathMatch: 'full',
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about-page').then(m => m.AboutPageComponent),
      },
      {
        path: 'contacts',
        loadComponent: () => import('./pages/contact-page/contact-page').then(m => m.ContactPageComponent),
      },
      {
        path: 'pro',
        loadComponent: () => import('./pages/pro-page/pro-page').then(m => m.ProPageComponent),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
