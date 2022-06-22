import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutsourceTransactionGroupComponent } from './outsource-transaction-group.component';

const routes: Routes = [
  {
    path: '',
    component: OutsourceTransactionGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutsoureTransactionGroupRoutingModule { }
