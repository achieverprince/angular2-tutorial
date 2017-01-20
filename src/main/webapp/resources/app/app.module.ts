import {BrowserModule}                from '@angular/platform-browser';
import {ReactiveFormsModule}          from '@angular/forms';
import {NgModule}                     from '@angular/core';
import {AppComponent}                 from './app.component';
import {TwoWayBindingComponent}       from '../app/component/two_way_binding/two-way-binding.component';
import {DynamicFormComponent}         from './dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form-question.component';
import {APP_BASE_HREF} from '@angular/common';
import { routing } from './app.routes';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, routing],
    declarations: [AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, TwoWayBindingComponent],
    providers: [{provide: APP_BASE_HREF, useValue : '/angular2-tutorial/' }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}