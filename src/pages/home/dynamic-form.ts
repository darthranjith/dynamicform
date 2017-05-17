import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../home/form-base';
import { FormService } from '../../providers/form-service';

@Component({
  selector: 'page-dynamic-form',
  templateUrl: 'dynamic-form.html',
})
export class DynamicForm {

  @Input() elements: FormBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  constructor(private formService: FormService) { }
  ngOnInit() {
    this.form = this.formService.toFormGroup(this.elements);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
