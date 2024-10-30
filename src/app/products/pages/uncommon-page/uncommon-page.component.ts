import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Daniel';
  public gender: 'male' | 'female' = 'male';
  public invitacionMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }


  changeClient() {
    this.name = 'melisa';
    this.gender = 'female';
  }

  // i18nPlural
  public client: string[] = ['Maria', ' Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melisa'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void {
    this.client.shift()
  }

  public person = {
    name:'Fernando',
    age: 36,
    addres: 'ottawa, Canada'
  }

  // async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, rejec)=>{
    setTimeout(() => {
      resolve ( 'Tenemos data en la promesa' )
    },3500)
  })
}
