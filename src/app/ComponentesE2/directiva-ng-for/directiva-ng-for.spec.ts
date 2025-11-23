import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgFor } from './directiva-ng-for';

describe('DirectivaNgFor', () => {
  let component: DirectivaNgFor;
  let fixture: ComponentFixture<DirectivaNgFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivaNgFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaNgFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
