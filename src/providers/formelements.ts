import { Injectable } from '@angular/core';
import { FormDropDown } from '../pages/home/form-dropdown';
import { FormText } from '../pages/home/form-text';
import { FormBase } from '../pages/home/form-base';


@Injectable()
export class FormElements {
  getFormElements() {
    let elements: FormBase<any>[] = [
      new FormDropDown({
        key: 'langtype',
        label: 'Type',
        options: [
          { key: 'ang', value: 'Angular' },
          { key: 'vue', value: 'VueJS2' },
          { key: 'js', value: 'Javascript' },
          { key: 'ts', value: 'Typescript' }
        ]
      }),
      new FormText({
        key: 'name',
        label: 'Name',
        value: 'Ranjith'
      }),
      new FormText({
        key: 'cell',
        label: 'Mobile No',
        type: 'tel'
      }),
      new FormText({
        key: 'email',
        label: 'Email',
        type: 'email'
      }), 
      new FormDropDown({
        key: 'contactmode',
        label: 'Preferred Mode',
        options: [
          { key: 'email', value: 'Email' },
          { key: 'call', value: 'Call' },
          { key: 'vis', value: 'Direct Visit' }
        ]
      })
    ];
    return elements;
  }
}
