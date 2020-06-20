import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { ProgressStepsComponent } from './progress-steps.component';
describe('ProgressStepsComponent', () => {
  let component: ProgressStepsComponent;
  let fixture: ComponentFixture<ProgressStepsComponent>;
  beforeEach(() => {
    const questionServiceStub = () => ({ playerChoices: {} });
    const routerStub = () => ({ navigate: array => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProgressStepsComponent],
      providers: [
        { provide: QuestionService, useFactory: questionServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(ProgressStepsComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('btnShowDiagram', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.btnShowDiagram();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
