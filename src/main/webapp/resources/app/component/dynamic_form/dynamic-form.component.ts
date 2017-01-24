import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from '../../question-base';
import { QuestionControlService }    from '../../question-control.service';
import {Inject} from '@angular/core';

@Component({
    selector: 'dynamic-form',
    templateUrl: 'resources/app/app_template/dynamic-form.component.html',
    providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {
    @Input() questions: QuestionBase<any>[] = [];
    form: FormGroup;
    payLoad = '';
    constructor(@Inject(QuestionControlService) private qcs: QuestionControlService) {  }
    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions);
    }
    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
