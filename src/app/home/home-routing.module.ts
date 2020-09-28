import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPage } from '../first/first.page';
import { FourthPage } from '../fourth/fourth.page';
import { SecondPage } from '../second/second.page';
import { ThirdPage } from '../third/third.page';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'first',
    component: FirstPage
  },
  {
    path: 'second',
    component: SecondPage
  },
  {
    path: 'third',
    component: ThirdPage
  },
  {
    path: 'fourth',
    component: FourthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
