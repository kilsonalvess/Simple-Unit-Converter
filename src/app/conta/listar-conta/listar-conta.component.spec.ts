import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContaComponent } from './listar-conta.component';

describe('ListarContaComponent', () => {
  let component: ListarContaComponent;
  let fixture: ComponentFixture<ListarContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarContaComponent]
    });
    fixture = TestBed.createComponent(ListarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
