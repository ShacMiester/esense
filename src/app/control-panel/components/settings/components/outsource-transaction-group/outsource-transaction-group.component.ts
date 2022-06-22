import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { OutSourceTransactionGroup } from 'src/app/control-panel/entities/out-source-transaction-group.entity';
import { OutsoureTransactionGroupService } from './services/outsoure-transaction-group.service';
import { MatDialog } from '@angular/material/dialog';
import { OutsourseFormComponent } from './outsourse-form/outsourse-form.component';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-outsource-transaction-group',
  templateUrl: './outsource-transaction-group.component.html',
  styleUrls: ['./outsource-transaction-group.component.scss']
})
export class OutsourceTransactionGroupComponent implements OnInit, OnDestroy {
  outSourceTransactionGroupItems !: OutSourceTransactionGroup[];
  subScription: Subscription = new Subscription();
  modelChanged = new Subject<string>();

  constructor(private outSoruceTransactionGroupService: OutsoureTransactionGroupService, public dialog: MatDialog) {
    this.subScription.add(this.modelChanged.pipe(debounceTime(500)).subscribe(() => {
      this.constructItems();
    }));
  }
  searchValue!: string;
  ngOnInit(): void {
    this.constructItems();
  }

  constructItems() {
    this.subScription.add(this.outSoruceTransactionGroupService.getOutSourceItems().subscribe({
      next: (v: OutSourceTransactionGroup[]) => {
        if (this.searchValue)
          this.outSourceTransactionGroupItems = v.filter(record => record.name.toLowerCase().includes(this.searchValue.toLowerCase()))
        else
          this.outSourceTransactionGroupItems = v
        // this.outSoruceTransactionGroupService.outSourceTransactionGroupItems.next(v)
      }
    }))
  }

  deleteRecord(id: number) {
    const recordIndex = this.outSourceTransactionGroupItems.findIndex(record => record.id === id)
    if (recordIndex >= 0)
      this.outSourceTransactionGroupItems.splice(recordIndex, 1)
    this.outSoruceTransactionGroupService.outSourceTransactionGroupItems.next(this.outSourceTransactionGroupItems)
  }

  updateRecord(record: OutSourceTransactionGroup) {
    this.openDialog('update', record, 'تعديل على الاسم')
  }


  changed($event: any) {
    this.modelChanged.next($event);
  }
  openDialog(type: 'add' | 'update' = 'add', record?: OutSourceTransactionGroup, title: string = 'إضافة الاسم'): void {
    const dialogRef = this.dialog.open(OutsourseFormComponent, {
      width: '40vw',
      data: { record: record, title: title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        switch (type) {
          case 'add':
            this.outSourceTransactionGroupItems.push(result.record)
            this.outSoruceTransactionGroupService.addOutSourceItem(this.outSourceTransactionGroupItems)
            break;
          case 'update':
            this.outSoruceTransactionGroupService.updateOutSourceItem(result.record)
            break;
        }
      }
    });
  }

  ngOnDestroy(): void {
      this.subScription.unsubscribe();
  }
}

