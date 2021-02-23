import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Page1Page } from './page1.page';

import { HomePageRoutingModule1 } from './page1-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule1
  ],
  exports: [
    Page1Page
  ],
  declarations: [Page1Page]
})
export class Page1Module {}
