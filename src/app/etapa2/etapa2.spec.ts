import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etapa2 } from './etapa2';

describe('Etapa2', () => {
  let component: Etapa2;
  let fixture: ComponentFixture<Etapa2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etapa2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etapa2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
