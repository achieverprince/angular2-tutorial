/**
 * Created by jebaprince on 1/23/2017.
 */
import {Component, AfterViewInit, ViewChild, ElementRef}      from '@angular/core';
import {Inject} from '@angular/core'
declare var $:any;


@Component({
    templateUrl: 'resources/app/app_template/jquery_integration/jquery_integration.html'
})
export class JqueryIntegrationComponent implements AfterViewInit{
    @ViewChild('jqueryElement') el:ElementRef;
    constructor() {
    }

    ngAfterViewInit() {
        console.log(this);
        $(this.el.nativeElement).slideUp(4000).slideDown(5000);
    }
}