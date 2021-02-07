import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'new', loadChildren: () => import('src/app/branches/form/form.module').then(m => m.FormModule) },
  { path: 'table', loadChildren: () => import('src/app/branches/branches.module').then(m => m.BranchesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class BranchesRoutingModule {}
