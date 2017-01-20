import { Component }       from '@angular/core';
import { QuestionService } from './question.service';
import {Inject} from '@angular/core';

@Component({
    /*selector:'app-component',*/
    templateUrl: './app_template/app.component.html',
    providers:  [QuestionService]
})
export class AppComponent {
    questions: any[];
    constructor(@Inject(QuestionService) service: QuestionService) {
        this.questions = service.getQuestions();
    }
}
