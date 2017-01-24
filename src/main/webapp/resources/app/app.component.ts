import { Component }       from '@angular/core';
import { QuestionService } from './question.service';
import {Inject} from '@angular/core';

@Component({
    selector:'app-component',
    templateUrl: 'resources/app/app_template/app.component.html',
    styleUrls: ['resources/app/css/style.css'],
})
export class AppComponent {
    constructor() {
    }
}
