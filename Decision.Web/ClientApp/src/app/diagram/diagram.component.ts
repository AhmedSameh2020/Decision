import { Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-diagram',
    templateUrl: './diagram.component.html',
    styleUrls: ['./diagram.component.css']
})
/** diagram component*/
export class DiagramComponent {
    /** diagram ctor */
  constructor(private questionService: QuestionService, private router: Router) {
    if (questionService.rootQuestion == undefined) {
      this.router.navigate(['/']);
    }
  }
}
