import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCotizacionesComponent } from './buscar-cotizaciones.component';

describe('BuscarCotizacionesComponent', () => {
  let component: BuscarCotizacionesComponent;
  let fixture: ComponentFixture<BuscarCotizacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarCotizacionesComponent]
    });
    fixture = TestBed.createComponent(BuscarCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
