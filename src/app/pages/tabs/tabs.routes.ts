import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  { 
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'calendar',
        loadComponent: () =>
          import('./components/calendar/calendar.page').then((m) => m.CalendarPage),
      },
      {
        path: 'dayActivities',
        loadComponent: () =>
          import('./components/day-activities/day-activities.page').then((m) => m.DayActivitiesPage),
      },

      {
        path: 'monthActivities',
        loadComponent: () =>
          import('./components/month-activities/month-activities.component').then((m) => m.MonthActivitiesComponent),
      },

      {
        path: 'weekActivities',
        loadComponent: () =>
          import('./components/week-activities/week-activities.component').then((m) => m.WeekActivitiesComponent),
      },

      {
        path: '',
        redirectTo: 'calendar',
        pathMatch: 'full',
      },
    ],
  },
];
