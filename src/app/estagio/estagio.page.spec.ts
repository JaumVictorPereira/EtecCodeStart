import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagioPage } from './estagio.page';

describe('EstagioPage', () => {
  let component: EstagioPage;
  let fixture: ComponentFixture<EstagioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstagioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstagioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
