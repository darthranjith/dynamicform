import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormElements } from '../../providers/formelements';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  elements: any[];
  constructor(service: FormElements) {    
    this.elements = service.getFormElements();
  }

}
