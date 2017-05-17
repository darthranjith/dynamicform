export class FormBase<T>{
    value: T; //holds the value
    key: string; //
    label: string; //holds the display text
    type: string; //holds the type of the input component
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        type?: string
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.type = options.type || '';
    }
}