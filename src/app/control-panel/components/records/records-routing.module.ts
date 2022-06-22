import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordsComponent } from './records.component';

const routes: Routes = [{
  path: '', component: RecordsComponent, children: [
    {
      path: 'settings',
      loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }
