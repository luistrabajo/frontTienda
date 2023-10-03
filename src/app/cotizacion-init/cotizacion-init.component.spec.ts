import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionInitComponent } from './cotizacion-init.component';

describe('CotizacionInitComponent', () => {
  let component: CotizacionInitComponent;
  let fixture: ComponentFixture<CotizacionInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotizacionInitComponent]
    });
    fixture = TestBed.createComponent(CotizacionInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
