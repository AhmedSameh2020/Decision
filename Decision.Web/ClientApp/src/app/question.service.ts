import {  Injectable, Inject } from '@angular/core';
import { Question } from './Question';
import { PlayerChoices } from './PlayerChoices';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  rootQuestion: Question;
  question: Question;
  playerChoices: PlayerChoices[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) { }

  getRootQuestion() {
    return new Promise((resolve, reject) => {
      this.http.get<Question>(this.baseUrl + 'Questionnaire')
        .toPromise()
        .then(res => {
          this.playerChoices = [];
          this.rootQuestion = this.question = res;
          resolve();
        }),
        msg => {
          reject(msg);
        }
    });
  }

  //async ngOnInit() {
  //  this.http.get<Question>(this.baseUrl + 'Questionnaire').subscribe(result => {
  //    this.rootQuestion = this.question = result;

  //  }, error => { console.error(error); });;
  //}
  getNextQuestion(choice: string) {

    if (choice != null) {
      this.playerChoices.push({
        question: this.question.questionBody,
        choice: choice
      });

      if (this.question.leftQuestion != null && this.question.leftChoice == choice) {
        this.question = this.question.leftQuestion;
      }
      else if (this.question.rightQuestion != null && this.question.rightChoice == choice) {
        this.question = this.question.rightQuestion;
      }
      else {
        if (this.playerChoices != []) {
          this.router.navigate(['/progresssteps']);
        }
      }
    }
  }

}
