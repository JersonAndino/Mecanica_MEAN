import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarNombreComponent } from './buscar-nombre.component';

describe('BuscarNombreComponent', () => {
  let component: BuscarNombreComponent;
  let fixture: ComponentFixture<BuscarNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarNombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
