import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreComponent1 } from './padre-component1';

describe('PadreComponent1', () => {
  let component: PadreComponent1;
  let fixture: ComponentFixture<PadreComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreComponent1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
