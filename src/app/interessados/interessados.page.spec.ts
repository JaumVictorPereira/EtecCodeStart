import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteressadosPage } from './interessados.page';

describe('InteressadosPage', () => {
  let component: InteressadosPage;
  let fixture: ComponentFixture<InteressadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteressadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteressadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
