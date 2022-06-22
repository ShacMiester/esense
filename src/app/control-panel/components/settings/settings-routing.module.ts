import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'outsoure-transaction-group',
        loadChildren: () =>
          import('./components/outsource-transaction-group/outsoure-transaction-group.module')
            .then(m => m.OutsoureTransactionGroupModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
