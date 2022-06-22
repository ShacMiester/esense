import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  items: any[] = [];
  subscription: Subscription = new Subscription();
  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.getNavBarItems().subscribe({
      next: (v: any) => this.items = v
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
