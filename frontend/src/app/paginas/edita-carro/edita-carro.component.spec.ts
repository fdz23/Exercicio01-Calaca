import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaCarroComponent } from './edita-carro.component';

describe('EditaCarroComponent', () => {
  let component: EditaCarroComponent;
  let fixture: ComponentFixture<EditaCarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaCarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
