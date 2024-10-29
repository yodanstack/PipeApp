import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Fieldset, FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    FieldsetModule
],
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    MenuModule,
    PanelModule,
  ]
})
export class PrimeNGModule { }
