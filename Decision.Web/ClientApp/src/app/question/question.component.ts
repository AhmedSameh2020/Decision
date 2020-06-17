import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})
/** question component*/
export class QuestionComponent {
  public rootQuestion: Question;
  public question: Question;
  private playerChoices: string[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Question>(baseUrl + 'Questionnaire').subscribe(result => {
      this.rootQuestion = this.question = result;
      this.GetNextQuestion(null);
    }, error => console.error(error));
  }

  GetNextQuestion(choice: string) {

    if (choice != null) {
      this.playerChoices.push(choice)
    }
    else {
      return;
    };

    if (this.question.leftQuestion != null && this.question.leftChoice == choice) {
      this.question = this.question.leftQuestion;
    }
    else if (this.question.rightQuestion != null && this.question.rightChoice == choice) {
      this.question = this.question.rightQuestion;
    }
    else {
      alert("");
      this.playerChoices = [];
      window.location.reload();
    }
  }
}

interface Question {
  questionBody: string;
  rightChoice: string;
  rightQuestion: Question;
  leftChoice: string;
  leftQuestion: Question;
}
