import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'new', loadChildren: () => import('src/app/employees/form/form.module').then(m => m.FormModule) },
  { path: 'table', loadChildren: () => import('src/app/employees/table/table.module').then(m => m.TableModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class EmployeesRoutingModule {}
