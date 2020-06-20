import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { QuestionService } from '../question.service';
import { QuestionComponent } from './question.component';
describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;
  beforeEach(() => {
    const questionServiceStub = () => ({
      getRootQuestion: () => ({}),
      getNextQuestion: choice => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [QuestionComponent],
      providers: [{ provide: QuestionService, useFactory: questionServiceStub }]
    });
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
