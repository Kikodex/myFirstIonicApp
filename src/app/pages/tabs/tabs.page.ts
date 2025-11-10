import { Component, EnvironmentInjector, inject } from '@angular/core';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonMenu, IonButton, IonRouterOutlet } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonMenu, IonButton, IonRouterOutlet],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private routes: Router) {
    addIcons({ triangle, ellipse, square });
  }
  public openDayActivities(){
    this.routes.navigate(['menu/dayActivities']);
  }

  public openCalendar(){
    this.routes.navigate(['menu/calendar']);
  }

  public openWeekActivities(){
    this.routes.navigate(['menu/weekActivities']);
  }

  public openMonthActivities(){
    this.routes.navigate(['menu/monthActivities']);
  }

  
}

