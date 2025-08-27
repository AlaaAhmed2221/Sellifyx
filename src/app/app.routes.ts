import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./features/home/home/home').then(m => m.Home) },
  { path: 'auth/login', loadComponent: () => import('./features/auth/login/login').then(m => m.Login) },
  { path: 'auth/register', loadComponent: () => import('./features/auth/register/register').then(m => m.Register) },
  
  {
  path: 'product/:id',
loadComponent: () => import('./features/product/product').then(m => m.ProductComponent)
},
{ path: 'product/:id', loadComponent: () => import('./features/product/product').then(m => m.ProductComponent) },
{ path: '**', redirectTo: '' },
];
