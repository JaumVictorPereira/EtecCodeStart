import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeAulasPage } from './grade-aulas.page';

describe('GradeAulasPage', () => {
  let component: GradeAulasPage;
  let fixture: ComponentFixture<GradeAulasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeAulasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeAulasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
