import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrilImagenesComponent } from './carril-imagenes.component';

describe('CarrilImagenesComponent', () => {
  let component: CarrilImagenesComponent;
  let fixture: ComponentFixture<CarrilImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrilImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrilImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
