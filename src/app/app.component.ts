import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonDatetime } from '@ionic/angular/standalone';
import { IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonDatetime, IonHeader, IonTitle, IonToolbar, IonFooter],  
  
})
export class AppComponent {
  constructor() {}
}
