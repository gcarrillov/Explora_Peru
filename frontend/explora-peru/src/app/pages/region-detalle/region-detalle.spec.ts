import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionDetalle } from './region-detalle';

describe('RegionDetalle', () => {
  let component: RegionDetalle;
  let fixture: ComponentFixture<RegionDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
