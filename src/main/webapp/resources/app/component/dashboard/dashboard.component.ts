/**
 * Created by jebaprince on 1/23/2017.
 */
import { Component }      from '@angular/core';
import {Inject} from '@angular/core';
import {QuestionService} from "../../question.service";

@Component({
    templateUrl: 'resources/app/app_template/dashboard/dashboard.html',
    providers:  [QuestionService]
})
export class DashboardComponent {
    questions: any[];
    constructor(@Inject(QuestionService) service: QuestionService) {
        this.questions = service.getQuestions();
    }
}