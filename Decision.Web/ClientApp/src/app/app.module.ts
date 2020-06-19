import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { QuestionComponent } from './question/question.component';
import { DiagramComponent } from './diagram/diagram.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';
import { QuestionService } from './question.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    QuestionComponent,
    DiagramComponent,
    ProgressStepsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: QuestionComponent, pathMatch: 'full' },
      { path: 'diagram', component: DiagramComponent },
      { path: 'progresssteps', component: ProgressStepsComponent },
    ])
  ],
  providers:
    [
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
