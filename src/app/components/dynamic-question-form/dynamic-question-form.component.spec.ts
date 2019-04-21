import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicQuestionFormComponent } from './dynamic-question-form.component';

describe('DynamicQuestionFormComponent', () => {
  let component: DynamicQuestionFormComponent;
  let fixture: ComponentFixture<DynamicQuestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicQuestionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
