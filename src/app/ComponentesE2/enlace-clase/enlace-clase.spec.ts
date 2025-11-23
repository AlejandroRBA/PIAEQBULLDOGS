import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceClase } from './enlace-clase';

describe('EnlaceClase', () => {
  let component: EnlaceClase;
  let fixture: ComponentFixture<EnlaceClase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnlaceClase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlaceClase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
