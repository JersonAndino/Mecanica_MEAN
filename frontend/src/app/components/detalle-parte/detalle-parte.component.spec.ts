import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleParteComponent } from './detalle-parte.component';

describe('DetalleParteComponent', () => {
  let component: DetalleParteComponent;
  let fixture: ComponentFixture<DetalleParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleParteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
