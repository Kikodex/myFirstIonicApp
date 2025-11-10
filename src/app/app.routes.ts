import { Routes } from '@angular/router';
import { LogginPage } from './pages/loggin/loggin.page';

export const routes: Routes = [
  { path: '', redirectTo: 'loggin', pathMatch: 'full' },
  { path: 'loggin', component: LogginPage },
  {
    path: 'menu',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
];
