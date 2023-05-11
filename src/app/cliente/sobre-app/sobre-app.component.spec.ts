import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreAppComponent } from './sobre-app.component';

describe('SobreAppComponent', () => {
  let component: SobreAppComponent;
  let fixture: ComponentFixture<SobreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
