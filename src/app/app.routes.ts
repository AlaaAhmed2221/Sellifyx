import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home/home').then(m => m.Home) },
  { path: 'products', loadComponent: () => import('./features/home/home/home').then(m => m.Home) },
  { path: 'product/:id', loadComponent: () => import('./features/products/product-detail/product-detail').then(m => m.ProductDetailComponent) },
  { path: 'auth/login', loadComponent: () => import('./features/auth/login/login').then(m => m.Login) },
  { path: 'auth/register', loadComponent: () => import('./features/auth/register/register').then(m => m.Register) },
  { path: '**', redirectTo: '' }
];
