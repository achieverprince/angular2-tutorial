/**
 * Created by jebaprince on 1/24/2017.
 */
export class DropdownItem{
    key: string;
    value: string;
    constructor(options: {
        key?: string,
        value?: string
    } = {}) {
        this.key = options.key || '';
        this.value = options.value || '';
    }

    getValue(){
        return this.value
    }
}