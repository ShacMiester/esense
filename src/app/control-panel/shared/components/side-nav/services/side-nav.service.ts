import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  sideNavItems: BehaviorSubject<any> = new BehaviorSubject([]);
  sideNavItemsObservable = this.sideNavItems as Observable<any>;

  getSideNavItems = (): Observable<any[]> => {
    return this.sideNavItemsObservable;
  }

  updatesideNavItems = (items: any) => this.sideNavItems.next(items);

}
