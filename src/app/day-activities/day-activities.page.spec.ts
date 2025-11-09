import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayActivitiesPage } from './day-activities.page';

describe('Tab3Page', () => {
  let component: DayActivitiesPage;
  let fixture: ComponentFixture<DayActivitiesPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(DayActivitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
