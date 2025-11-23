import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoComponent2 } from './hijo-component2';

describe('HijoComponent2', () => {
  let component: HijoComponent2;
  let fixture: ComponentFixture<HijoComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoComponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
