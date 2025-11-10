import { Component } from '@angular/core';
import { IonContent, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
  standalone: true,
  imports: [IonContent, IonDatetime, IonCol, IonGrid, IonRow]
})
export class CalendarPage {

  constructor() {}

}
