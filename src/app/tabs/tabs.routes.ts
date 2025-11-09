import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'loggin',
        loadComponent: () =>
          import('../loggin/loggin.page').then((m) => m.LogginPage),
      },
      {
        path: 'calendar',
        loadComponent: () =>
          import('../calendar/calendar.page').then((m) => m.CalendarPage),
      },
      {
        path: 'dayActivities',
        loadComponent: () =>
          import('../day-activities/day-activities.page').then((m) => m.DayActivitiesPage),
      },

      {
        path: 'monthActivities',
        loadComponent: () =>
          import('../month-activities/month-activities.component').then((m) => m.MonthActivitiesComponent),
      },

      {
        path: 'weekActivities',
        loadComponent: () =>
          import('../week-activities/week-activities.component').then((m) => m.WeekActivitiesComponent),
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/loggin',
    pathMatch: 'full',
  },
];
