import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarContaComponent } from './cadastrar-conta.component';

describe('CadastrarContaComponent', () => {
  let component: CadastrarContaComponent;
  let fixture: ComponentFixture<CadastrarContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarContaComponent]
    });
    fixture = TestBed.createComponent(CadastrarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
