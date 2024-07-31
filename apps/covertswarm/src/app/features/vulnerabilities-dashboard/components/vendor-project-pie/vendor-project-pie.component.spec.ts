import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProjectPieComponent } from './vendor-project-pie.component';

describe('VendorProjectPieComponent', () => {
  let component: VendorProjectPieComponent;
  let fixture: ComponentFixture<VendorProjectPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorProjectPieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VendorProjectPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
