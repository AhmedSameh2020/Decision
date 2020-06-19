import { Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-progress-steps',
    templateUrl: './progress-steps.component.html',
    styleUrls: ['./progress-steps.component.scss']
})
/** progressSteps component*/
export class ProgressStepsComponent {
  constructor(private questionService: QuestionService, private router: Router) {
    if (questionService.playerChoices == undefined) {
      this.router.navigate(['/']);
    }
  }

  btnShowDiagram() {
    this.router.navigate(['/diagram']);
  }
}
