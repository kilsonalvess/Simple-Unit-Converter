import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarInformacoesComponent } from './cadastrar-cliente.component';

describe('CadastrarInformacoesComponent', () => {
  let component: CadastrarInformacoesComponent;
  let fixture: ComponentFixture<CadastrarInformacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarInformacoesComponent]
    });
    fixture = TestBed.createComponent(CadastrarInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
