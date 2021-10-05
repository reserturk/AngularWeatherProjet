/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Weather16daysComponent } from './weather16days.component';

describe('Weather16daysComponent', () => {
  let component: Weather16daysComponent;
  let fixture: ComponentFixture<Weather16daysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather16daysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather16daysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
