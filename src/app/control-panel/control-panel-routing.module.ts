import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlPanelComponent } from './control-panel.component';

const routes: Routes = [{
  path: '', component: ControlPanelComponent,
  children: [
    {
      path: 'records',
      loadChildren: () =>
        import('./components/records/records.module')
          .then(m => m.RecordsModule),
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlPanelRoutingModule { }
