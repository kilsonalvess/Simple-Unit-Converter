import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInformacoesComponent } from './ver-perfil.component';

describe('ListarInformacoesComponent', () => {
  let component: ListarInformacoesComponent;
  let fixture: ComponentFixture<ListarInformacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarInformacoesComponent]
    });
    fixture = TestBed.createComponent(ListarInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
