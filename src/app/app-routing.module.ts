import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./control-panel/control-panel.module')
      .then(m => m.ControlPanelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'ignore'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
