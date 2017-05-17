import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { FormBase } from '../pages/home/form-base';

@Injectable()
export class FormService {
  constructor() { }
  toFormGroup(elements: FormBase<any>[]) {
    let group: any = {};
    elements.forEach(element => {
      group[element.key] = new FormControl(element.value || '');
    });
    return new FormGroup(group);
  }
}
