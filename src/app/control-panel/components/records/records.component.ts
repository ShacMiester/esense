import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarService } from '../../shared/components/navbar/services/navbar.service';
import { RecordsService } from './services/records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  constructor(private navbarService: NavbarService, private recordsService: RecordsService) { }

  ngOnInit(): void {
    this.updateNavBarItems()
  }

  updateNavBarItems() {
    this.recordsService.getRecordNavBarItems().subscribe(
      {
        next: (navbarItems) => {
          this.navbarService.navBarItems.next(navbarItems)
        }
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
