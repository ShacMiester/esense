import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { OutSourceTransactionGroup } from 'src/app/control-panel/entities/out-source-transaction-group.entity';

@Injectable({
  providedIn: 'root'
})
export class OutsoureTransactionGroupService {
  outSourceTransactionGroupItems: BehaviorSubject<any> = new BehaviorSubject([]);
  outSourceTransactionGroupItemsObservable = this.outSourceTransactionGroupItems as Observable<OutSourceTransactionGroup[]>;
  constructor() { }

  addOutSourceItem(items: OutSourceTransactionGroup[]) {
    this.outSourceTransactionGroupItems.next(items)
  }

  getOutSourceItems(): Observable<OutSourceTransactionGroup[]> {
    return this.outSourceTransactionGroupItemsObservable;
  }

  updateOutSourceItem(item: OutSourceTransactionGroup) {
    this.outSourceTransactionGroupItemsObservable.subscribe((items: OutSourceTransactionGroup[]) => {
      const recordIndex = items.findIndex(record => record.id === item.id)
      if (recordIndex >= 0)
        items[recordIndex] = item
    })
  }

}
