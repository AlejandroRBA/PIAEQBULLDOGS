import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreComponent2 } from './padre-component2';

describe('PadreComponent2', () => {
  let component: PadreComponent2;
  let fixture: ComponentFixture<PadreComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreComponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
