import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../home/form-base';

@Component({
  selector: 'page-dynamic-form-element',
  templateUrl: 'dynamic-form-element.html',
})
export class DynamicFormElement {
  @Input() element: FormBase<any>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.element.key].valid;
  }
}
