import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemClienteComponent } from './mantem-cliente.component';

describe('MantemClienteComponent', () => {
  let component: MantemClienteComponent;
  let fixture: ComponentFixture<MantemClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantemClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantemClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
