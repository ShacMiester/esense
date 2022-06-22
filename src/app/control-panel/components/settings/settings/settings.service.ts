import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getSettingsSideNavItems = (): Observable<any> => {
    return of([
      { name: 'ادارة المعاملات', link: 'transactions-managment' },
      { name: 'مجموعة المستلمين للجهات الخارجية', link: 'records/settings/outsoure-transaction-group' }
    ])
  }

}
