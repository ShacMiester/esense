import { Component, EventEmitter, Inject, NgZone, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OutSourceTransactionGroup } from 'src/app/control-panel/entities/out-source-transaction-group.entity';

@Component({
  selector: 'app-outsourse-form',
  templateUrl: './outsourse-form.component.html',
  styleUrls: ['./outsourse-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OutsourseFormComponent implements OnInit {

  outSourceForm!: FormGroup;
  title!: string;
  constructor(
    public dialogRef: MatDialogRef<OutsourseFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.consturctOutSourceForm(this.data.record);
    this.title = this.data?.title;
  }
  consturctOutSourceForm(record: OutSourceTransactionGroup = { name: '', details: '', id: Math.random() * 100 }) {
    this.outSourceForm = new FormGroup(
      {
        name: new FormControl(record?.name, Validators.required),
        details: new FormControl(record?.details),
        id: new FormControl(record?.id),
      }
    )
  }
  submitForm() {
    this.dialogRef.close()
  }

}
