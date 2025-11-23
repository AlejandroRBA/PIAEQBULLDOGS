import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoComponent1 } from './hijo-component1';

describe('HijoComponent1', () => {
  let component: HijoComponent1;
  let fixture: ComponentFixture<HijoComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoComponent1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
