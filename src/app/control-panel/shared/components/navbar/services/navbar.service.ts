import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  navBarItems: BehaviorSubject<any> = new BehaviorSubject([]);
  navBarItemsObservable = this.navBarItems as Observable<any>;

  getNavBarItems = (): Observable<any[]> => {
    return this.navBarItemsObservable
  }

  updateNavBarItems = (items: any) => this.navBarItems.next(items);
}
