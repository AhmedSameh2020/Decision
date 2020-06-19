import { Component } from '@angular/core';
import { QuestionService } from '../question.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
/** question component*/
export class QuestionComponent {

  constructor(private questionService: QuestionService) {
    questionService.getRootQuestion();
  }

  getNextQuestion(choice: string) {
     this.questionService.getNextQuestion(choice);
  }
}

