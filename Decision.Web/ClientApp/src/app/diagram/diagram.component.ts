import { Component } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
    selector: 'app-diagram',
    templateUrl: './diagram.component.html',
    styleUrls: ['./diagram.component.css']
})
/** diagram component*/
export class DiagramComponent {
    /** diagram ctor */
  constructor(private questionService: QuestionService) {
      
    }
}
