import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgIf } from './directiva-ng-if';

describe('DirectivaNgIf', () => {
  let component: DirectivaNgIf;
  let fixture: ComponentFixture<DirectivaNgIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivaNgIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaNgIf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
