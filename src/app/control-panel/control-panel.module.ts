import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlPanelRoutingModule } from './control-panel-routing.module';
import { HeaderModule } from './shared/components/header/header.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { ControlPanelComponent } from './control-panel.component';
import { SideNavModule } from './shared/components/side-nav/side-nav.module';
import { NavbarService } from './shared/components/navbar/services/navbar.service';
import { SideNavService } from './shared/components/side-nav/services/side-nav.service';


@NgModule({
  declarations: [ControlPanelComponent],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    HeaderModule,
    NavbarModule,
    SideNavModule
  ],
  providers: [NavbarService, SideNavService]
})
export class ControlPanelModule { }
