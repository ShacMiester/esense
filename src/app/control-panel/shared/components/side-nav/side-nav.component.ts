import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideNavService } from './services/side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  items: any[] = [];
  subscription: Subscription = new Subscription();
  constructor(private sideNavService: SideNavService) { }

  ngOnInit(): void {
    this.constructSideNavItems();
  }
  constructSideNavItems() {
    this.subscription.add(this.sideNavService.getSideNavItems().subscribe({
      next: (v: any) => this.items = v
    }))
  }

  ngOnDestroy(): void {
    this.sideNavService.sideNavItems.next([]);
    this.subscription.unsubscribe();
  }
}
