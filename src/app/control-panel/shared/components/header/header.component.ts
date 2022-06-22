import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  headerItems!: any[];
  subscriptions: Subscription = new Subscription();
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.initHeaderItems();
  }

  initHeaderItems = (): void => {
    this.subscriptions.add(this.headerService.getHeaderItems().subscribe({
      next: (headerItems) => { this.headerItems = headerItems }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
