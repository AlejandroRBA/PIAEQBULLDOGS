import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacePropiedades } from './enlace-propiedades';

describe('EnlacePropiedades', () => {
  let component: EnlacePropiedades;
  let fixture: ComponentFixture<EnlacePropiedades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnlacePropiedades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlacePropiedades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
