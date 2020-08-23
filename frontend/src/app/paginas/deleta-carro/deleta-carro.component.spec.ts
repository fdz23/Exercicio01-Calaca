import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaCarroComponent } from './deleta-carro.component';

describe('DeletaCarroComponent', () => {
  let component: DeletaCarroComponent;
  let fixture: ComponentFixture<DeletaCarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletaCarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletaCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
