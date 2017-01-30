import {BrowserModule}                from '@angular/platform-browser';
import {ReactiveFormsModule}          from '@angular/forms';
import {NgModule}                     from '@angular/core';
import {AppComponent}                 from './app.component';
import {TwoWayBindingComponent}       from '../app/component/two_way_binding/two-way-binding.component';
import {DynamicFormComponent}         from './component/dynamic_form/dynamic-form.component';
import {DynamicFormQuestionComponent} from './component/dynamic_form/dynamic-form-question.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {JqueryIntegrationComponent} from "./component/jquery_integration/jquery_integration";
import {JqueryUIIntegrationComponent} from "./component/jqueryui_integration/jqueryui_integration.component";
import { FormsModule }   from '@angular/forms';
import {DropdownComponent} from "./component/dropdown/dynamic_dropdown.component";
import {AjaxComponent} from "./component/ajax/ajax.component";
import { HttpModule }    from '@angular/http';
import {HighchartComponent} from "./component/highchart/highchart.component";

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot(routes),HttpModule],
    declarations: [AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, TwoWayBindingComponent, DashboardComponent,JqueryIntegrationComponent,JqueryUIIntegrationComponent, DropdownComponent,AjaxComponent,HighchartComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}