import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaCarroComponent } from './cria-carro.component';

describe('CriaCarroComponent', () => {
  let component: CriaCarroComponent;
  let fixture: ComponentFixture<CriaCarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriaCarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
