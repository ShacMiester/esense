import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  getHeaderItems = (): Observable<any> => {
    return of(
      [
        { name: "السجلات", link: 'records' },
        { name: 'القيادة', link: 'empty' }
      ]
    )
  }

}
