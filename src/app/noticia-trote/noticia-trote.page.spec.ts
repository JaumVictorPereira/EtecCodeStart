import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaTrotePage } from './noticia-trote.page';

describe('NoticiaTrotePage', () => {
  let component: NoticiaTrotePage;
  let fixture: ComponentFixture<NoticiaTrotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaTrotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaTrotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
