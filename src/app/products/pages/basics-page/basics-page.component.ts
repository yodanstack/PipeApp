import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower:string = 'Yooo';
  public nameUpper:string = 'Yooo';
  public fullName:string = 'Yooo DanieEL';


  public customDate: Date = new Date();
}
