import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
