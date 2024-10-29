import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

//i18nSelect
  public name: string = 'Daniel';
  public gender: 'male'|'female' = 'male';
  public invitacionMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla'
  }


changeClient(){
  this.name = 'melisa';
  this.gender = 'female';
}
}
