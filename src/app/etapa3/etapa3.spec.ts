import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etapa3 } from './etapa3';

describe('Etapa3', () => {
  let component: Etapa3;
  let fixture: ComponentFixture<Etapa3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etapa3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etapa3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
