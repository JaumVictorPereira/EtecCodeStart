import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dica1Page } from './dica1.page';

describe('Dica1Page', () => {
  let component: Dica1Page;
  let fixture: ComponentFixture<Dica1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dica1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dica1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
