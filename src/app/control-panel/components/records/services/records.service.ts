import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getRecordNavBarItems = ():Observable<any> => {
    return of([{ name: 'لوحة القيادة', link: 'dashboard' },{name:'اعدادات النظام',link:'records/settings'}])
  }

}
