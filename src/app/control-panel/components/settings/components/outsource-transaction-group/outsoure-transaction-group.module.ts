import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutsoureTransactionGroupRoutingModule } from './outsoure-transaction-group-routing.module';
import { OutsourceTransactionGroupComponent } from './outsource-transaction-group.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutsourseFormComponent } from './outsourse-form/outsourse-form.component';


@NgModule({
  declarations: [OutsourceTransactionGroupComponent, OutsourseFormComponent],
  imports: [
    CommonModule,
    OutsoureTransactionGroupRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OutsoureTransactionGroupModule { }
