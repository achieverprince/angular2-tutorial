/**
 * Created by jebaprince on 1/24/2017.
 */
import { Component }      from '@angular/core';
import {DropdownItem} from './dropdown.item';

@Component({
    templateUrl: 'resources/app/app_template/dropdown/dropdown.html'
})
export class DropdownComponent {
    dropdownList: DropdownItem[];
    selectedDropdown: DropdownItem;
    constructor() {
        this.dropdownList = [];
        this.populateDropdownData();
    }

    private populateDropdownData(){
        this.dropdownList.push(
            new DropdownItem({key: 'brave',
                value: 'Bravery Rating'})
        );

        this.dropdownList.push(
            new DropdownItem({key: 'test data',
                value: 'Test data'})
        );

        this.dropdownList.push(
            new DropdownItem({key: 'dropdown',
                value: 'Drop Down'})
        );
    }
}
