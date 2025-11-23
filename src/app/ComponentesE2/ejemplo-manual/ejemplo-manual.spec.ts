import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploManual } from './ejemplo-manual';

describe('EjemploManual', () => {
  let component: EjemploManual;
  let fixture: ComponentFixture<EjemploManual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploManual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploManual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
