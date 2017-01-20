var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from '../app/component/two_way_binding/two-way-binding.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { APP_BASE_HREF } from '@angular/common';
import { routing } from './app.routes';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, ReactiveFormsModule, routing],
            declarations: [AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, TwoWayBindingComponent],
            providers: [{ provide: APP_BASE_HREF, useValue: '/survey-web/' }],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map