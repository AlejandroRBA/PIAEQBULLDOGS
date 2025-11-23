import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploCLIComponent } from './ejemplo-clicomponent';

describe('EjemploCLIComponent', () => {
  let component: EjemploCLIComponent;
  let fixture: ComponentFixture<EjemploCLIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploCLIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploCLIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
