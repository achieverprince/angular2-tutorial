import {Component, ViewChild, ElementRef}      from '@angular/core';

/**
 * Created by jebaprince on 1/30/2017.
 */
declare var Highcharts:any;


@Component({
    templateUrl: 'resources/app/app_template/highchart/highchart.html'
})
export class HighchartComponent {
    seriesData:Array<number> = [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];
    value:number;

    @ViewChild('chartElement') el:ElementRef;
    constructor() {
    }

    ngAfterViewInit() {
        //console.log(this);
        this.doRenderChart();
    }

    addValueToChart(){
        this.seriesData.push(this.value);
        this.doRenderChart()
    }

    doRenderChart(){
        Highcharts.chart(this.el.nativeElement, {
            title: {
                text: 'Monthly Average Temperature',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: WorldClimate.com',
                x: -20
            },
            xAxis: {
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tokyo',
                data: this.seriesData
            }]
        });
    }
}