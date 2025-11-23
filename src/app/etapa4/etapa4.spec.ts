import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etapa4 } from './etapa4';

describe('Etapa4', () => {
  let component: Etapa4;
  let fixture: ComponentFixture<Etapa4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etapa4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etapa4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
