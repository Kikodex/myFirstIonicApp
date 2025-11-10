import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import { IonFooter, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonMenu, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from './components/explore-container/explore-container.component';
import { routes } from './tabs.routes';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,ExploreContainerComponent, IonButtons, IonMenuButton, IonMenu , IonMenuButton, IonTitle, IonToolbar, IonButton  ],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private router: Router) {
    addIcons({ triangle, ellipse, square });
  }
  public openDayActivities(){
    this.router.navigate(['menu/dayActivities']);
  }

  public openCalendar(){
    this.router.navigate(['menu/calendar']);
  }

  
}

