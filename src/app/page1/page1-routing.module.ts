import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Page } from './page1.page';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: Page1Page,
  },
  {
    path: ':id',
    component: Page1Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule],
  declarations: [
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule1 {}
