import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesPlantilla } from './variables-plantilla';

describe('VariablesPlantilla', () => {
  let component: VariablesPlantilla;
  let fixture: ComponentFixture<VariablesPlantilla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariablesPlantilla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariablesPlantilla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
