/**
 * Created by jebaprince on 1/27/2017.
 */
import { Http }       from '@angular/http';
import {Component, Inject}      from '@angular/core';
import  {Ip} from './ip.model';

@Component({
    templateUrl: 'resources/app/app_template/ajax/ajax.html'
})
export class AjaxComponent {
    ip:string;

    constructor(@Inject(Http) private http: Http) {

    }

    private makeAjaxCall(){
        this.getIpJson().then(iP => this.ip = iP.ip);
    }

    private getIpJson(): Promise<Ip>{
        const url = `http://ip.jsontest.com/`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Ip)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}