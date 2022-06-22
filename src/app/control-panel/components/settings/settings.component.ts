import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideNavService } from '../../shared/components/side-nav/services/side-nav.service';
import { SettingsService } from './settings/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  constructor(private settingsService: SettingsService, private sideNavService: SideNavService) { }

  ngOnInit(): void {
    this.constructSideNavItems();
  }

  constructSideNavItems() {
    this.subscription.add(this.settingsService.getSettingsSideNavItems().subscribe(
      {
        next: (sideNavItems) => {
          this.sideNavService.sideNavItems.next(sideNavItems);
        }
      }
    ));
  }

  ngOnDestroy(): void {
    this.sideNavService.sideNavItems.next([]);
    this.subscription.unsubscribe();
  }

}
